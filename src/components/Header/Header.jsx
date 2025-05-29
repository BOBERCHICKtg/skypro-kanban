import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import styled from "styled-components";

// Стилизованные компоненты
const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0 10px;
`;

const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

const UserButton = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color 0.3s;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

const Header = () => {
  const [isUserPopupVisible, setUserPopupVisible] = useState(false);

  const toggleUserPopup = (e) => {
    e.preventDefault();
    setUserPopupVisible(!isUserPopupVisible);
  };

  return (
    <SHeader className="header">
      <div className="container">
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
      </div>
    </SHeader>
  );
};

export default Header;
