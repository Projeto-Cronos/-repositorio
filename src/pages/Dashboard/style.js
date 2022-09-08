import styled from "styled-components";
import background from "../../assets/image/background-dashboard.svg";

export const DashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  padding: 124px 60px 0 60px;

  input {
    border: none;
    padding: 10px;
    font: inherit;
  }
  .containerImg {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img {
    width: 20%;
  }

  @media (max-width: 768px) {
    padding: 94px 16px 0 16px;
    .img {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    padding: 94px 30px 0 30px;
    .img {
      width: 55%;
    }
  }
`;
