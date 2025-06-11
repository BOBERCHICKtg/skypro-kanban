import { Link } from "react-router-dom";
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
  return (
    <ContainerSignIn>
      <Modal>
        <ModalBlock>
          <ModalTitle>
            <h2>Вход</h2>
          </ModalTitle>
          <FormLogin id="formLogIn">
            <Input
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <Input
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <ButtonEnter type="submit" className="_hover01" id="btnEnter">
              <Link to="/">Войти</Link>
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
