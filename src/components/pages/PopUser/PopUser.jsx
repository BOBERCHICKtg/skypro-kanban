import {
  PopUserSetWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styles";

const PopUser = () => {
  return (
    <PopUserSetWrapper id="user-set-target">
      <a href="">x</a>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        <a href="#popExit">Выйти</a>
      </PopUserButton>
    </PopUserSetWrapper>
  );
};

export default PopUser;
