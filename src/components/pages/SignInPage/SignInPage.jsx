import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../services/auth";
import {
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalTitle,
  FormLogin,
  Input,
  ButtonEnter,
  FormGroup,
  ErrorMessage,
} from "./SignInPage.styles";

const SignInPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { login, password } = e.target.elements;
      const userData = await signIn({
        login: login.value.trim(),
        password: password.value.trim(),
      });

      localStorage.setItem("user", JSON.stringify(userData.user));
      localStorage.setItem("authToken", userData.user.token);
      navigate("/");
    } catch (error) {
      setError(error.message || "Неверный логин или пароль");
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
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ModalTitle>
          <FormLogin onSubmit={handleSubmit}>
            <Input
              type="text"
              name="login"
              placeholder="Логин"
              required
              disabled={isLoading}
              autoComplete="username"
            />
            <Input
              type="password"
              name="password"
              placeholder="Пароль"
              required
              disabled={isLoading}
              autoComplete="current-password"
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
