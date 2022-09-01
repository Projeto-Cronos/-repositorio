import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
  background-color: #ccc;
  height: 64px;

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
