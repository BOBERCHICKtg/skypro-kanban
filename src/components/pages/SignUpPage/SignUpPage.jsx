import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../services/auth";
import {
  ContainerSignUp,
  Modal,
  ModalBlock,
  ModalTitle,
  FormLogin,
  Input,
  ButtonSignUp,
  FormGroup,
} from "./SignUpPage.styles";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userData = {
        name: e.target.name.value.trim(),
        login: e.target.login.value.trim(),
        password: e.target.password.value.trim(),
      };

      // Базовая валидация
      if (!userData.name || !userData.login || !userData.password) {
        throw new Error("Все поля обязательны для заполнения");
      }

      if (userData.password.length < 6) {
        throw new Error("Пароль должен быть не менее 6 символов");
      }

      await signUp(userData);
      navigate("/sign-in", { state: { success: true } });
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || "Ошибка регистрации"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContainerSignUp>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Регистрация</h2>
            {error && (
              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
            )}
          </ModalTitle>

          <FormLogin onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Имя"
              required
              disabled={isLoading}
            />
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
              placeholder="Пароль (минимум 6 символов)"
              required
              minLength="6"
              disabled={isLoading}
            />

            <ButtonSignUp type="submit" disabled={isLoading}>
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </ButtonSignUp>

            <FormGroup>
              Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
            </FormGroup>
          </FormLogin>
        </ModalBlock>
      </Modal>
    </ContainerSignUp>
  );
};

export default SignUpPage;
