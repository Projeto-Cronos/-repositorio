import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  height: 64px;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
  z-index: 9999;

  .logo {
    position: absolute;
    left: calc(50% - 45px);
    margin-top: 5px;
    cursor: pointer;

    img {
      width: 90px;
    }
  }
`;
