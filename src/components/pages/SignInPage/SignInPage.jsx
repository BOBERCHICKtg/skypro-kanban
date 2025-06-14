import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

      const requestData = { login, password };
      console.log("Отправляемые данные:", requestData);

      const response = await fetch(
        "https://webdev-hw-api.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();
      console.log("Ответ сервера:", result);

      if (!response.ok) {
        throw new Error(result.error || "Ошибка авторизации");
      }

      if (!result.token || !result.user) {
        throw new Error("Неверный формат ответа сервера");
      }

      onSuccessfulAuth(result);
    } catch (err) {
      console.error("Ошибка авторизации:", err);
      setError(
        err.message.includes("Failed to fetch")
          ? "Ошибка соединения с сервером. Проверьте интернет и попробуйте снова"
          : err.message
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
                  padding: "8px",
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
              placeholder="Логин (например: admin)"
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="password"
              placeholder="Пароль (например: admin)"
              required
              minLength="3"
              disabled={isLoading}
            />
            <ButtonEnter
              type="submit"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.7 : 1 }}
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
