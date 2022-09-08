import styled from "styled-components";
import background from "../../assets/image/background-orange-white.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};

  @media (min-width: 768px) {
    gap: 15vw;
  }
  @media (min-width: 1024px) {
    gap: 0;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 596.5px;
  gap: 10vw;

  .img {
    display: none;
  }
  @media (min-width: 768px) {
    height: min-content;
    width: 78%;
    gap: 10vw;
    .img {
      display: flex;
      width: 60%;
    }
  }
  @media (min-width: 1024px) {
    height: min-content;
    width: 78%;
    gap: 10vw;
    .img {
      display: flex;
      width: 60%;
    }
  }
`
