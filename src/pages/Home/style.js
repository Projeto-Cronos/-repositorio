import styled from "styled-components";
import background from "../../assets/image/background-home.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};
`;

export const HeaderContent = styled.div`
  .HeaderTitle {
    height: 404px;
    width:min-content;
 
    border-radius: 0px;
    font-size:30px;
    font-family: "Jura";
    font-weight: 600;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 0 0 0 0;

    position: absolute;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .HeaderSubtitle {
    font-size: 30px;
    text-align: left;
    letter-spacing: -1.2385px;

    color: ${(props) => props.theme.grey3};

    border-radius: 0px;
    font-family: "Jura";
    font-weight: 700;
    padding: 0px;
    margin: 0 0 0 0;

    position: absolute;
  }
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min-content;
  background: ${(props) => props.theme.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .SecondSectionTitle {
    width: 100%;
    font-family: "Inter";
    font-size: 44px;
    text-align: center;
    padding-top: 30px;
    font-weight: 500;
  }

  .SecondSectionP {
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: "Inter";
    font-size: 18px;
    text-align: center;
    padding-top: 13px;
    justify-content: center;
  }

  .CronosP {
    width: 100%;
    color: ${(props) => props.theme.orange1};
    text-align: center;
    font-weight: 600;
  }

  .Content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    align-content: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    padding: 37px 35px 0 35px;
    row-gap: 0px;
    column-gap: 10px;

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .Image1 {
    width: 100%;
    height: 220px;
  }

  .Image1 img {
    width: 100%;
    height: 220px;
  }

  .FirstTopic {
    width: 100%;
 
    height: 240px;
    padding: 30px 2px 3px 32px;
  }

  .FirstTopic h2 {
    width: 100%;
    font-family: "Jura";
    font-size: 20px;
    font-weight: 600;
  }

  .FirstContent {
    width: 100%;
    height: 220px;
    font-size: 14px;
  }

  .SecondTopic {
    width: 100%;
    height: 240px;
    padding: 30px 2px 3px 1px;
  }

  .SecondTopic h2 {
    font-family: "Jura";
    font-size: 30px;
    font-weight: 600;
  }

  .SecondContent {
    width: 100%;
    height: 220px;
    font-size: 14px;
  }

  .Image2 {
    width: 100%;
    height: 220px;
  }

  .Image2 img {
    width: 100%;
    height: 220px;
  }
`;

export const Scroll = styled.div`
  .ScrollDown {
    margin: 0 0 30px 0;
    scroll-behavior: smooth;
  }

  .Smoothscroll {
    position: absolute;
    bottom: 78px;
    left: 50%;
    margin-left: -47px;
    display: block;
    height: 42px;
    width: 146px;
    font-size: 20px;
    line-height: 42px;
    color: ${(props) => props.theme.white};
    border-radius: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  .Smoothscroll:hover {
    color: ${(props) => props.theme.orange1};
  }

  i {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 4px 36px 0 0;
    border: 0;
    outline: 0;
    font-size: 170%;
    vertical-align: baseline;
    background: transparent;
  }

  i:before,
  i:after {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    right: 55px;
    top: 30px;
    bottom: -53px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.orange1};
    animation: animar 2s infinite;
  }

  @keyframes animar {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export const LastSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min-content;
  background-color: ${(props) => props.theme.orange1};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .Container {
    width: 70%;
    align-self: center;
    margin: auto;
    padding-top: 80px;
  }

  .LastSectionTitle {
    width: 100%;
    font-family: "Inter";
    font-size: 44px;
    text-align: center;
    padding-top: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.white};
  }

  .LastSectionP {
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: "Inter";
    font-size: 18px;
    text-align: center;
    padding-top: 13px;
    justify-content: center;
    color: ${(props) => props.theme.white};
  }

  .Resources {
    display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: auto;
            height: inherit;
            margin: 0px 50px 0px 50px;
            column-gap: 30px;
  }

  .Div1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  .Div1 i {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    float: left;
    margin-left: 10px;
    background-color: ${(props) => props.theme.white};
    border-radius: 50px;
    padding: 28px 0 0 27px;
    color: ${(props) => props.theme.blue1};
  }

  .Div1 h3 {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 24px;
    font-weight: 600;
  }

  .Div1 p {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 14px;
  }

  .Div2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  .Div2 i {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    float: left;
    margin-left: 10px;
    background-color: ${(props) => props.theme.white};
    border-radius: 50px;
    padding: 28px 0 0 27px;
    color: ${(props) => props.theme.blue2};
  }

  .Div2 h3 {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 24px;
    font-weight: 600;
  }

  .Div2 p {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 14px;
  }

  .Div3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  .Div3 i {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    float: left;
    margin-left: 10px;
    background-color: ${(props) => props.theme.white};
    border-radius: 50px;
    padding: 28px 0 0 27px;
    color: ${(props) => props.theme.blue2};
  }

  .Div3 h3 {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 24px;
    font-weight: 600;
  }

  .Div3 p {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: inter;
    font-size: 14px;
  }

  .Div1,
  .Div2,
  .Div3 path {
    margin: 0;
  }
`;
