import { Link } from "react-router-dom";
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
  return (
    <ContainerSignUp>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Регистрация</h2>
          </ModalTitle>
          <FormLogin id="formLogUp">
            <Input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
              className="first-name"
            />
            <Input
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
              className="login"
            />
            <Input
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              className="password-first"
            />
            <ButtonSignUp type="submit" className="_hover01" id="SignUpEnter">
              <Link to="/">Зарегистрироваться</Link>
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
