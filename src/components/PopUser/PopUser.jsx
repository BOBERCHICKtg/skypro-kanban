import styled from "styled-components";

const PopUserSetWrapper = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

const PopUserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

const PopUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const PopUserButton = styled.button`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

const PopUser = () => {
  return (
    <PopUserSetWrapper id="user-set-target">
      <a href="">x</a>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        <a href="#popExit">Выйти</a>
      </PopUserButton>
    </PopUserSetWrapper>
  );
};

export default PopUser;
