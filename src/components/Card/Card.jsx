import { useNavigate } from "react-router-dom";
import {
  Cards,
  CardItem,
  CardWrapper,
  CardGroup,
  CardTheme,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
} from "./Card.styles";

const Card = ({ tasks, selectedDate }) => {
  const navigate = useNavigate();

  if (!tasks?.length) return null;

  const formatDate = (date) => {
    if (!date) return null;

    try {
      const dateObj = date instanceof Date ? date : new Date(date);
      if (isNaN(dateObj.getTime())) return null;

      return dateObj
        .toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, ".");
    } catch {
      return null;
    }
  };

  const handleCardClick = (taskId) => navigate(`pop-browse/${taskId}`);

  const handleButtonClick = (taskId, e) => {
    e.stopPropagation();
    navigate(`pop-browse/${taskId}`);
  };

  const getThemeColor = (topic) => {
    switch (topic) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      default:
        return "purple";
    }
  };

  return (
    <Cards>
      {tasks.map((task) => (
        <CardItem
          key={task._id}
          onClick={() => handleCardClick(task._id)}
          role="button"
          tabIndex={0}
        >
          <CardWrapper>
            <CardGroup>
              <CardTheme color={getThemeColor(task.topic)}>
                <p>{task.topic}</p>
              </CardTheme>
              <CardButton
                as="div"
                onClick={(e) => handleButtonClick(task._id, e)}
              >
                <div></div>
                <div></div>
                <div></div>
              </CardButton>
            </CardGroup>

            <CardContent>
              <CardTitle>{task.title}</CardTitle>
              <CardDate>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z"
                    fill="#94A6BE"
                  />
                  <path
                    d="M8.8 4H7.2V8.8L11.2 11.6L12 10.4L8.8 8V4Z"
                    fill="#94A6BE"
                  />
                </svg>
                <p>
                  {selectedDate
                    ? formatDate(selectedDate) || "Selected date"
                    : formatDate(task.date) || "No date"}
                </p>
              </CardDate>
            </CardContent>
          </CardWrapper>
        </CardItem>
      ))}
    </Cards>
  );
};

export default Card;
