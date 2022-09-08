import styled from "styled-components";
import background from "../../assets/image/background-orange-white.svg";

export const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};

  .img {
    width: 30%;
  }
  @media (max-width: 950px) {
    background-position: center center;

    .img {
      width: 40%;
    }
  }
  @media (max-width: 600px) {
    background-position: center center;

    .img {
      width: 80%;
    }
  }
`;
