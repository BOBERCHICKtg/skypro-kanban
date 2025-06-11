import { Link, useNavigate } from "react-router-dom"; // Добавлен импорт Link
import {
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalTitle,
  FormLogin,
  Input,
  ButtonEnter,
  FormGroup,
} from "./SignInPage.styles";

const SignInPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Временная заглушка для демонстрации
    const email = e.target.login.value;
    const password = e.target.password.value;

    if (email && password) {
      localStorage.setItem("authToken", "demo-token");
      setIsAuth(true);
      navigate("/");
    } else {
      alert("Введите email и пароль");
    }
  };

  return (
    <ContainerSignIn>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Вход</h2>
          </ModalTitle>
          <FormLogin id="formLogIn" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              required
            />
            <Input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              required
            />
            <ButtonEnter type="submit" className="_hover01" id="btnEnter">
              Войти
            </ButtonEnter>
            <FormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/sign-up">Регистрируйтесь здесь</Link>
            </FormGroup>
          </FormLogin>
        </ModalBlock>
      </Modal>
    </ContainerSignIn>
  );
};

export default SignInPage;
