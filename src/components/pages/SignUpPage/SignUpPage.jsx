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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = {
        name: event.target.name.value.trim(),
        login: event.target.login.value.trim(),
        password: event.target.password.value.trim(),
      };

      validateFormData(formData);

      await signUp(formData);
      navigate("/sign-in", { state: { registrationSuccess: true } });
    } catch (error) {
      handleRegistrationError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateFormData = ({ name, login, password }) => {
    if (!name || !login || !password) {
      throw new Error("Все поля обязательны для заполнения");
    }

    if (password.length < 6) {
      throw new Error("Пароль должен содержать минимум 6 символов");
    }
  };

  const handleRegistrationError = (error) => {
    console.error("Registration error:", error);
    setError(error.message || "Произошла ошибка при регистрации");
  };

  return (
    <ContainerSignUp>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Регистрация</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ModalTitle>

          <FormLogin onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              required
              disabled={isLoading}
            />
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="Логин"
              required
              disabled={isLoading}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Пароль (минимум 6 символов)"
              required
              minLength="6"
              disabled={isLoading}
            />

            <ButtonSignUp
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </ButtonSignUp>

            <FormGroup>
              <p>
                Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
              </p>
            </FormGroup>
          </FormLogin>
        </ModalBlock>
      </Modal>
    </ContainerSignUp>
  );
};

export default SignUpPage;
