import styled from "styled-components";
import background from "../../assets/image/background-orange-white.svg";

export const Section = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    gap: 1vw;
    height: min-content;
  }
  @media (min-width: 1024px) {
    height: min-content;
    gap: 2vw;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:min-content;
  background-color: var(--white);
  gap: 4vw;
  padding: 2.5% 0;
  margin: 0 0 1vw 0;
  @media (min-width: 768px) {
    height: min-content;
    width: 78%;
    gap: 3vw;
    border-radius: 0.2vw;
    box-shadow: 0px 4px 40px -10px var(--shadow);
    padding: 2.5% 3%;
  
  }
  @media (min-width: 1024px) {
    height: min-content;
    width: 78%;
    gap: 0;
    border-radius: 0.2vw;
    box-shadow: 0px 4px 40px -10px var(--shadow);
    padding: 2.5% 3%;
  
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 5.7vw;
  line-height: 9vw;
  margin-top: 1.5vw;
  color: var(--black);
  text-align: center;
  font-family: "Jura", sans-serif;
  @media (min-width: 768px) {
    font-size: 3vw;
    line-height: 2vw;
  }
  @media (min-width: 1024px) {
    font-size: 3.1vw;
    line-height: 4vw;
    margin-bottom: 1vw;
  }
`;