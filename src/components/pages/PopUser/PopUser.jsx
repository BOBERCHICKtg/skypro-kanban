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
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserButton type="button">Выйти</PopUserButton>
    </PopUserSetWrapper>
  );
};

export default PopUser;
