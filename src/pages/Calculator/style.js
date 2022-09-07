import styled from "styled-components";
import background from "../../assets/image/background-calculator.svg";

export const ContainerCalculator = styled.div`
  display: flex;
  justify-content: center;
  
  max-height: 1000px;
  height: 120vh;
  width: 100%;

  gap: 20px;

  background-image: url(${background});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};

  font-family: "Jura", sans-serif;
`;
export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: 20%;
  background-color: ${(props) => props.theme.grey4};
`;
export const MainCalculator = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 0 auto;
  height: 100%;
  gap: 30px;
  background-color: ${(props) => props.theme.grey4};

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
  .btn_refrash {
    position: fixed;
    top: 20%;
    /* display: none; */
  }
`;
export const FormCalculator = styled.form`
  display: flex;
  flex-direction: column;

  gap: 30px;
  width: 265px;

  .box__select {
    display: flex;
    flex-direction: column;
    gap: 5px;

    select {
      padding: 15px;

      color: ${(props) => props.theme.grey2};

      border: none;
      border-bottom: 1px solid ${(props) => props.theme.grey1};
      outline: none;

      background: transparent;

      cursor: pointer;
    }
    span {
      font-size: 12px;
    }
  }

  .box__btn {
    display: flex;
    justify-content: center;

    width: 100%;

    margin-top: 10px;

    button {
      width: 100%;
      height: 40px;

      font-family: "Jura", sans-serif;

      cursor: pointer;

      border: none;
      border-radius: 4px;

      color: ${(props) => props.theme.white};

      background-color: ${(props) => props.theme.blue1};
    }

    button:hover {
      background-color: ${(props) => props.theme.blue2};
    }
  }
`;
export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-bottom: 80px;

  h2 {
    color: ${(props) => props.theme.orange2};
    font-weight: 800;
  }

  div {
    display: flex;
    flex-direction: column;

    gap: 10px;

    text-align: center;
    width: 70%;
    p {
      line-height: 20px;
    }
    span {
      color: ${(props) => props.theme.orange1};
      font-weight: 700;
    }
  }
`;
