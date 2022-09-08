import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  height: 64px;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
  z-index: 1;
  background: ${(props) => props.theme.white};
  width: 100%;

  .menuIcon {
    z-index: 99999;
    cursor: pointer;
    font-size: 35px;
    color: ${(props) => props.theme.black};
  }

  .logo {
    position: absolute;
    left: calc(50% - 45px);
    margin-top: 5px;
    cursor: pointer;

    img {
      width: 80px;
    }
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
