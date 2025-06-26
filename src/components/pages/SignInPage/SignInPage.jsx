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
} from "./SignInPage.styles";

const SignInPage = () => {
  // Убрали пропс onSuccessfulAuth
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userData = await signIn({
        login: e.target.login.value.trim(),
        password: e.target.password.value.trim(),
      });

      // Сохраняем данные пользователя в localStorage
      localStorage.setItem("user", JSON.stringify(userData.user));
      localStorage.setItem("authToken", userData.user.token);

      navigate("/"); // Перенаправляем на главную страницу
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
            {error && (
              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
            )}
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
