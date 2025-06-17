import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
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

const API_URL = "https://wedev-api.sky.pro/api/user/login";

const SignInPage = ({ onSuccessfulAuth }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        login: e.target.login.value.trim(),
        password: e.target.password.value.trim(),
      });

      onSuccessfulAuth(response.data);
      navigate("/");
    } catch {
      alert("Неверный логин или пароль");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContainerSignIn>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Вход</h2>
          </ModalTitle>
          <FormLogin onSubmit={handleSubmit}>
            <Input
              type="text"
              name="login"
              placeholder="Логин"
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="password"
              placeholder="Пароль"
              required
              disabled={isLoading}
            />
            <ButtonEnter type="submit" disabled={isLoading}>
              {isLoading ? "Вход..." : "Войти"}
            </ButtonEnter>
            <FormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/sign-up">Создать аккаунт</Link>
            </FormGroup>
          </FormLogin>
        </ModalBlock>
      </Modal>
    </ContainerSignIn>
  );
};

export default SignInPage;
