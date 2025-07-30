import { useState } from "react";
import {
  CalendarContainer,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  DaysNames,
  DayName,
  Cells,
  Cell,
  OtherMonthCell,
  ActiveDayCell,
  CurrentCell,
  CalendarPeriod,
  CalendarText,
  HiddenInput,
} from "./Calendar.styles";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Calendar = ({ onChange, activeDate }) => {
  const [currentDate, setCurrentDate] = useState(activeDate || new Date());

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const startingDay = firstDayOfMonth.getDay();
  const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;

  const prevMonthDays = [];
  const prevMonthDaysCount = adjustedStartingDay;
  const prevMonthLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  for (let i = 0; i < prevMonthDaysCount; i++) {
    prevMonthDays.push(prevMonthLastDay - (prevMonthDaysCount - 1 - i));
  }

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const nextMonthDays = [];
  const totalCells = prevMonthDays.length + currentMonthDays.length;
  const nextMonthDaysCount =
    totalCells <= 35 ? 35 - totalCells : 42 - totalCells;

  for (let i = 1; i <= nextMonthDaysCount; i++) {
    nextMonthDays.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    onChange?.(newDate);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  return (
    <CalendarContainer>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </CalendarMonth>
          <NavActions>
            <NavAction onClick={handlePrevMonth} data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction onClick={handleNextMonth} data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <DaysNames>
            <DayName>пн</DayName>
            <DayName>вт</DayName>
            <DayName>ср</DayName>
            <DayName>чт</DayName>
            <DayName>пт</DayName>
            <DayName className="-weekend-">сб</DayName>
            <DayName className="-weekend-">вс</DayName>
          </DaysNames>
          <Cells>
            {prevMonthDays.map((day) => (
              <OtherMonthCell key={`prev-${day}`}>{day}</OtherMonthCell>
            ))}

            {currentMonthDays.map((day) => {
              const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day
              );
              const isActive =
                activeDate &&
                activeDate.getDate() === day &&
                activeDate.getMonth() === currentDate.getMonth() &&
                activeDate.getFullYear() === currentDate.getFullYear();
              const isToday =
                new Date().getDate() === day &&
                new Date().getMonth() === currentDate.getMonth() &&
                new Date().getFullYear() === currentDate.getFullYear();
              const isWeekend = date.getDay() % 6 === 0;

              if (isActive) {
                return (
                  <ActiveDayCell
                    key={`current-${day}`}
                    className={isWeekend ? "_weekend" : ""}
                    onClick={() => handleDateSelect(day)}
                  >
                    {day}
                  </ActiveDayCell>
                );
              }
              if (isToday) {
                return (
                  <CurrentCell
                    key={`current-${day}`}
                    className={isWeekend ? "_weekend" : ""}
                    onClick={() => handleDateSelect(day)}
                  >
                    {day}
                  </CurrentCell>
                );
              }
              return (
                <Cell
                  key={`current-${day}`}
                  className={isWeekend ? "_weekend" : ""}
                  onClick={() => handleDateSelect(day)}
                >
                  {day}
                </Cell>
              );
            })}

            {nextMonthDays.map((day) => (
              <OtherMonthCell
                key={`next-${day}`}
                className={
                  day === 1 && nextMonthDays.length <= 7 ? "_weekend" : ""
                }
              >
                {day}
              </OtherMonthCell>
            ))}
          </Cells>
        </CalendarContent>

        <HiddenInput
          type="hidden"
          id="datepick_value"
          value={formatDate(activeDate)}
        />
        <CalendarPeriod>
          <CalendarText>
            Срок исполнения:{" "}
            <span className="date-control">{formatDate(activeDate)}</span>
          </CalendarText>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarContainer>
  );
};

export default Calendar;
