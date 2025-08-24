import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PopUser from "../pages/PopUser/PopUser";
import {
  SHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  ButtonMainNew,
  UserButton,
  Container,
} from "./Header.styles";
import AuthContext from "./../../context/AuthContext";

const Header = ({ onLogout }) => {
  // Убрали user из пропсов
  const [isUserPopupVisible, setUserPopupVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext); // Получаем user из контекста

  const toggleUserPopup = (e) => {
    e.preventDefault();
    setUserPopupVisible(!isUserPopupVisible);
  };

  const handleNewTask = () => {
    navigate("/pop-new-card", { state: { background: location } });
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    onLogout();
    setUserPopupVisible(false);
  };

  return (
    <SHeader>
      <Container className="container">
        <HeaderBlock>
          <HeaderLogo className="header__logo _show _light">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderLogo className="header__logo _dark">
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            {user ? ( // Используем user из контекста
              <>
                <ButtonMainNew id="btnMainNew" onClick={handleNewTask}>
                  Создать задачу
                </ButtonMainNew>
                <UserButton href="#user-set-target" onClick={toggleUserPopup}>
                  {user.name || "Пользователь"}
                </UserButton>
                {isUserPopupVisible && (
                  <PopUser onLogout={handleLogoutClick} user={user} />
                )}
              </>
            ) : (
              <ButtonMainNew
                id="btnSignIn"
                onClick={() => navigate("/sign-in")}
              >
                Войти
              </ButtonMainNew>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;
