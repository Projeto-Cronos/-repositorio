import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 5.7vw;
  line-height: 9vw;
  margin-bottom: 5vw;
  color: ${(props) => props.theme.black};
  text-align: center;
  font-family: "Jura", sans-serif;
  @media (min-width: 768px) {
    font-size: 1.2vw;
    line-height: 2vw;
    margin-bottom: 1vw;
  }
  @media (min-width: 1024px) {
    font-size: 1.2vw;
    line-height: 2vw;
    margin-bottom: 1vw;
  }
`;
export const Form = styled.form`
  width: 100%;
  height: 598px;
  display: flex;
  flex-direction: column;
  padding: 8vw 3% 0 3%;
  align-items: center;
  gap: 5vw;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 4px 40px -10px var(--shadow);

  .cursor {
    cursor:pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${(props) => props.theme.white};
    min-width: 50px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 3px 10px 3px;
    z-index: 1;
    font-size: 2.5vw;
    border-radius: 0.15vw;
    color: ${(props) => props.theme.red2};;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  .containerInput {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .contentInput {
    display: flex;
    width: 100%;
    background: ${(props) => props.theme.white};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.15vw solid ${(props) => props.theme.black};
  }
  .fixed {
    display: flex;
    align-items: center;
    font-size: 6.5vw;
    margin-right: 0;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
    border: none;
  }
  .fixed-eye {
    display: flex;
    align-items: center;
    font-size: 6.5vw;
    margin-right: 0;
    cursor: pointer;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
    border: none;
  }
  .alert {
    display: flex;
    align-items: center;
    font-size: 6.5vw;
    margin-right: 0;
    color: ${(props) => props.theme.red1};
    background: ${(props) => props.theme.white};
    border: none;
  }
  @media (min-width: 768px) {
    width: 40%;
    height: 100%;
    padding: 3% 3% 3% 3%;
    gap: 1vw;
    border-radius: 0.3vw;
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      padding: 1vw 1vw;
      font-size: 0.9vw;
    }

    .fixed {
      font-size: 1.3vw;
    }

    .fixed-eye {
      font-size: 1.3vw;
    }

    .alert {
      font-size: 1.3vw;
    }
  }
  @media (min-width: 1024px) {
    width: 40%;
    padding: 3% 3% 3% 3%;
    gap: 1vw;
    border-radius: 0.3vw;
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      padding: 1vw 1vw;
      font-size: 0.9vw;
    }

    .fixed {
      font-size: 1.3vw;
    }

    .fixed-eye {
      font-size: 1.3vw;
    }

    .alert {
      font-size: 1.3vw;
    }
  }
`;
export const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 100%;
  height: 5.5vh;
  background: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 4.5vw;
  color: ${(props) => props.theme.grey2};
  border: none;
  @media (min-width: 768px) {
    font-size: 1.05vw;
  }

  @media (min-width: 1024px) {
    font-size: 1.05vw;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 4.5vw;
  color: ${(props) => props.theme.black};
  font-family: "Jura", sans-serif;
  text-align: start;
  @media (min-width: 768px) {
    font-size: 1vw;
  }
  @media (min-width: 1024px) {
    font-size: 1vw;
  }
`;
export const ButtonOrange = styled.button`
  box-sizing: border-box;
  display: flex;
  cursor:pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 91%;
  height: 7.3vh;
  background: ${(props) => props.theme.orange1};
  border: 0.1vw solid ${(props) => props.theme.orange1};
  border-radius: 1vw;
  font-weight: 600;
  margin-top: 1vw;
  font-size: 5vw;
  color: var(--white);
  font-family: "Jura", sans-serif;

  &:hover {
    background: ${(props) => props.theme.orange2};
    border: 0.1vw solid ${(props) => props.theme.orange2};
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 4.6vh;
    border-radius: 0.2vw;
    font-weight: 600;
    font-size: 1.05vw;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 6.6vh;
    border-radius: 0.2vw;
    font-weight: 600;
    font-size: 1.05vw;
  }
`;
export const ParagraphQuestion = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 3.8vw;
  line-height: 4.5vw;
  color: ${(props) => props.theme.grey1};
  margin-top: 3vw;
  text-align: center;
  font-family: "Jura", sans-serif;

  .link {
    color: ${(props) => props.theme.orange1};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.orange2};
    }
  }
  @media (min-width: 768px) {
    font-size: 0.8vw;
    line-height: 1.1vw;
    margin-top: 1vw;

    .link {
      color: ${(props) => props.theme.orange1};
      text-decoration: none;

      :hover {
        color: ${(props) => props.theme.orange2};
      }
    }
  }
  @media (min-width: 1024px) {
    font-size: 0.8vw;
    line-height: 1.1vw;
    margin-top: 1vw;

    .link {
      color: ${(props) => props.theme.orange1};
      text-decoration: none;

      :hover {
        color: v${(props) => props.theme.orange2};
      }
    }
  }
`;