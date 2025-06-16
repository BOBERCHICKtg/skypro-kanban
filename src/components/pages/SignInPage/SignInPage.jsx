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
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const login = e.target.login.value.trim();
      const password = e.target.password.value.trim();

      if (!login || !password) {
        throw new Error("Все поля обязательны для заполнения");
      }

      const requestBody = {
        login,
        password,
      };

      console.log("Отправляемый запрос:", {
        url: API_URL,
        method: "POST",
        data: requestBody,
      });

      const response = await axios.post(API_URL, requestBody);

      const responseData = response.data;
      console.log("Ответ сервера:", responseData);

      if (!responseData.token || !responseData.user) {
        throw new Error("Неверный формат ответа сервера");
      }

      onSuccessfulAuth(responseData);
    } catch (err) {
      console.error("Ошибка авторизации:", {
        name: err.name,
        message: err.message,
        response: err.response?.data,
      });

      setError(
        err.response?.data?.error ||
          err.message ||
          "Произошла ошибка при авторизации"
      );
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
              <div
                style={{
                  color: "red",
                  marginTop: "10px",
                  padding: "10px",
                  background: "#ffeeee",
                  borderRadius: "4px",
                }}
              >
                {error}
              </div>
            )}
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
              minLength="6"
              disabled={isLoading}
              autoComplete="current-password"
            />
            <ButtonEnter
              type="submit"
              disabled={isLoading}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "wait" : "pointer",
              }}
            >
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
