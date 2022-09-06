import styled from "styled-components";
import  background from "../../assets/image/background-orange-white.svg"

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-image: url(${background});
  background-position: left top;
    background-repeat:no-repeat;
    background-size:cover;
`

export const Main = styled.main`

    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme.white};

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        
        width: 80%;
        height: 88%;
        margin: auto;

        gap: 1rem;

        overflow-y: scroll;

    }


    h1 {

        margin: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Jura";
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 28px;

    }

    @media screen and (min-width: 768px) {
        
        h1{

            font-size: 2.5rem;
            margin-bottom: 2rem;

        }

    }

    .mainCard {

        width: 100%;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;
        gap:0.2rem;

    }

    @media screen and (min-width: 768px) {
        
        .mainCard {

            flex-direction: row-reverse;

        }

    }

    .mainInfo {

        display: none;

    }

    @media screen and (min-width: 768px) {
        
        .mainInfo {

            width: 90%;
            margin: 0 auto;

            display: initial;

        }

    }

    @media screen and (min-width: 768px){
     
        .mainContent {

            width: 80%;

            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-end;
            gap: 0.5rem;

        }
        
    }

    .mainCardImg {

        height: 147px;
        width: 90%;
        margin: auto;
        margin-bottom: 0.2rem;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    @media screen and (min-width: 768px) {
     
        .mainCardImg {

            width: 26rem;
            height: 9rem;
            margin-right: 2rem;

        }
        
    }

    .mainText {

        width: 90%;
        margin: auto;

        font-family: "Montserrat";
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 15px;

    }

    @media screen {
     
        .mainText {

            margin: 0 auto;

            font-size: 0.6rem;
            font-weight: none;

        }
        
    }

    h2 {

        width: 90%;
        margin: auto;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 1.3rem;

        color: ${(props) => props.theme.blue1};

    }

    @media screen and (min-width: 768px) {
        
        h2 {

            font-size: 2rem;
            margin: 0 auto;

        }

    }

    @media screen and (min-width: 768px) {
     
        ul {

            width: 90%;
            margin: 0 auto;

            display: flex;
            flex-wrap: wrap;

        }
        
    }

    li {

        width: 90%;
        height: 4.4rem;
        margin: auto;
        margin-bottom: 1rem;

        display: flex;
        gap: 0.2rem;

    }

    @media screen and (min-width: 768px) {
     
        li {

            width: 45%;
            height: 14rem;
            margin: 0.5rem auto;

            flex-direction: column;

            

        }
        
    }

    .liText {

        display: none;

        width: 90%;
        margin: auto;

        font-family: "Montserrat";
        font-size: 0.5rem;
        font-weight: 600;
        line-height: 15px;

    }

    @media screen and (min-width:768px) {
        
        .liText {

            display: initial;

        }

    }

    .liCardImg {

        width: 84px;
        height: 70px;   

    }

    @media screen and (min-width: 768px) {
     
        .liCardImg {

            width: 100%;
            height: 8rem;

        }
        
    }

    .containerInfo {

        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    h3 {

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 0.7rem;
        line-height: 12px;

        color: ${(props) => props.theme.blue1};


    }

    span {

        height: 2.5rem;
        
        display: flex;
        align-items: flex-end;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 12px;

        color: ${(props) => props.theme.grey};

    }

    a {

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 12px;
        text-decoration: none;

        color: ${(props) => props.theme.orange1};

    }

`