import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  display: ${props => props.dropdown};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.shadow};
  backdrop-filter: blur(2px);
  inset: 0;
  z-index: 1;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 85%;
  animation: fadeIn;
  animation-duration: 0.5s;
  @media (min-width: 768px) {
    width: 55%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 1vw 1vw 0 0;
  padding: 4% 4%;
  @media (min-width: 768px) {
    border-radius: 0.5vw 0.5vw 0 0;
    padding: 3vw 3vw ;
}
@media (min-width: 1024px) {
  border-radius: 0.3vw 0.3vw 0 0;
  padding: 3.5% 1.1vw;
}
`;
export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 4.5vw;
  color: ${(props) => props.theme.black};
  @media (min-width: 768px) {
  border-radius: 0.5vw 0.5vw 0 0;
  font-size: 3vw;
}
@media (min-width: 1024px) {
  border-radius: 0.3vw 0.3vw 0 0;
  font-size: 1.1vw;
}
`;
export const Form = styled.form`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8vw;
  background: ${(props) => props.theme.white};
  border-radius: 0 0 1vw 1vw;
  border-top: 0.15vw solid ${(props) => props.theme.black};

  h1 {
    width: 100%;
  font-weight: 500;
  font-size: 3.2vw;
  padding: 8% 4%;
  color: ${(props) => props.theme.black};
  }
  @media (min-width: 768px) {
    border-radius: 0 0 0.5vw 0.5vw;

    h1 {
  font-size: 2vw;
  padding: 4vw 3vw ;

  }
}
@media (min-width: 1024px) {
  border-radius: 0 0 0.3vw 0.3vw;

  h1 {
  font-size: 1vw;
  padding:  2vw 1.1vw;
  }
}
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  gap: 4%;
  border-top: 0.15vw solid ${(props) => props.theme.black};
  padding: 4% 4%;
  @media (min-width: 768px) {
    padding: 3vw;
}
@media (min-width: 1024px) {
  gap: 6%;
  padding: 1.1vw;
}
`;
export const ButtonRed = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.red1};
  border: 0.1vw solid ${(props) => props.theme.red1};
  border-radius: 1vw;
  font-weight: 500;
  font-size: 4vw;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.red2};
    border: 0.1vw solid ${(props) => props.theme.blue2};
  }
  @media (min-width: 768px) {
    border-radius: 0.5vw;
  font-size: 2.55vw;
}
@media (min-width: 1024px) {
  border-radius: 0.2vw;
 
  font-size: 1.05vw;
}
`;
export const ButtonGrey = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6.6vh;
  background: ${(props) => props.theme.grey4};
  border: 0.1vw solid ${(props) => props.theme.grey4};
  border-radius: 1vw;
  font-weight: 500;
  font-size: 4vw;
  color: ${(props) => props.theme.black};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.grey5};
    border: 0.1vw solid ${(props) => props.theme.grey5};
    color: ${(props) => props.theme.white};
  }
  @media (min-width: 768px) {
    border-radius: 0.5vw;
  font-size: 2.55vw;
}
@media (min-width: 1024px) {
  border-radius: 0.2vw;
  font-size: 1.05vw;
}
`;