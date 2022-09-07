import styled from "styled-components";
import background from "../../assets/image/background-calculator.svg";

export const ContainerCalculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center center;
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
  top: 11.5%;
  width: 100%;
  @media (min-width: 1024px) {
  top: 14%;
  }
`;
export const MainCalculator = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:${(props) => props.theme.black};
  margin: 0 auto;
  height: 100%;
  gap: 30px;
  background-color: ${(props) => props.theme.grey4};

  h1 {
    font-size: 18px;
    font-weight: 700;
    color:${(props) => props.theme.black};
  }
  .btn_refrash {
    position: fixed;
    top: 20%;
  }
`;
export const FormCalculator = styled.form`
  display: flex;
  flex-direction: column;
  height: min-content;
  gap: 30px;
  width: 100%;
  .box__select {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
    .select {
      display:flex;
      align-items:center;
      width:100%;
      border-bottom: 1px solid ${(props) => props.theme.black};
    }

    .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${(props) => props.theme.white};
    width: min-content;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px 2px 8px 2px;
    z-index: 1;
    font-size: 2.374vw;
    border-radius: 1vw;
    color: ${(props) => props.theme.red2};
    text-align:center;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
    select {
      width:95%;
      padding: 15px;

      color: ${(props) => props.theme.grey2};

      border: none;
      
      outline: none;

      background: transparent;

      cursor: pointer;
    }
    span {
      width:10px;
      font-size: 17px;
      color: ${(props) => props.theme.red2};
      padding-right:20px;
    }

  .box__btn {
    display: flex;
    justify-content: center;

    width: 100%;

    margin-top: 10px;
  }
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
    @media (min-width: 768px) {
      .dropdown-content {
    min-width: 50px;
    padding: 10px 3px 10px 3px;
    font-size: 1.2vw;
    border-radius: 0.5vw;
  }
  }
    @media (min-width: 1024px) {
      .dropdown-content {
    min-width: 50px;
    padding: 10px 3px 10px 3px;
    font-size: 0.9vw;
    border-radius: 0.15vw;
  }
  }
`;
export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  
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
      color:${(props) => props.theme.black};
    }
    p:nth-child(2n) {
      margin-bottom:10px;
    }
    span {
      width:100%;
      color: ${(props) => props.theme.orange1};
      font-weight: 700;
      text-align:center;
      
    }
    @media (min-width: 1024px) {
      p:nth-child(2n) {
      margin-bottom:0;
    }
  }
  }
`;

