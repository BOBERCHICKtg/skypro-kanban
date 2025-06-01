import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import {
  SHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  ButtonMainNew,
  UserButton,
  Container,
} from "./Header.styles";

const Header = () => {
  const [isUserPopupVisible, setUserPopupVisible] = useState(false);

  const toggleUserPopup = (e) => {
    e.preventDefault();
    setUserPopupVisible(!isUserPopupVisible);
  };

  return (
    <SHeader>
      <Container className="container">
        <HeaderBlock>
          <HeaderLogo className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <ButtonMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </ButtonMainNew>
            <UserButton href="#user-set-target" onClick={toggleUserPopup}>
              Ivan Ivanov
            </UserButton>
            {isUserPopupVisible && <PopUser />}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;
