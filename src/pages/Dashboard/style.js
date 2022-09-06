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

  @media (max-width: 768px) {
    padding: 94px 16px 0 16px;
  }

  @media (max-width: 1024px) {
    padding: 94px 30px 0 30px;
  }

  input {
    border: none;
    padding: 10px;
    font: inherit;
  }
`;
