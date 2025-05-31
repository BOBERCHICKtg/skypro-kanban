import styled from "styled-components";

const CalendarContainer = styled.div`
  margin-bottom: 20px;
`;

const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const CalendarBlock = styled.div`
  display: block;
`;

const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

const OtherMonthCell = styled(Cell)`
  opacity: 0;
`;

const ActiveDayCell = styled(Cell)`
  background-color: #94a6be;
  color: #ffffff;
`;

const CurrentCell = styled(Cell)`
  font-weight: 700;
`;

const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

const CalendarText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
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
            <OtherMonthCell>28</OtherMonthCell>
            <OtherMonthCell>29</OtherMonthCell>
            <OtherMonthCell>30</OtherMonthCell>
            <Cell>31</Cell>
            <Cell>1</Cell>
            <Cell className="_weekend">2</Cell>
            <Cell className="_weekend">3</Cell>
            <Cell>4</Cell>
            <Cell>5</Cell>
            <Cell>6</Cell>
            <Cell>7</Cell>
            <CurrentCell>8</CurrentCell>
            <ActiveDayCell className="_weekend">9</ActiveDayCell>
            <Cell className="_weekend">10</Cell>
            <Cell>11</Cell>
            <Cell>12</Cell>
            <Cell>13</Cell>
            <Cell>14</Cell>
            <Cell>15</Cell>
            <Cell className="_weekend">16</Cell>
            <Cell className="_weekend">17</Cell>
            <Cell>18</Cell>
            <Cell>19</Cell>
            <Cell>20</Cell>
            <Cell>21</Cell>
            <Cell>22</Cell>
            <Cell className="_weekend">23</Cell>
            <Cell className="_weekend">24</Cell>
            <Cell>25</Cell>
            <Cell>26</Cell>
            <Cell>27</Cell>
            <Cell>28</Cell>
            <Cell>29</Cell>
            <Cell className="_weekend">30</Cell>
            <OtherMonthCell className="_weekend">1</OtherMonthCell>
          </Cells>
        </CalendarContent>

        <HiddenInput type="hidden" id="datepick_value" value="08.09.2023" />
        <CalendarPeriod>
          <CalendarText>
            Срок исполнения: <span className="date-control">09.09.23</span>
          </CalendarText>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarContainer>
  );
};

export default Calendar;
