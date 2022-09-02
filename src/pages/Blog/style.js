import styled from "styled-components";
import  background from "../../assets/image/background-orange-white.svg"

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`

export const Main = styled.main`

    width: 100%;
    height: 100%;

    background-color: #ffff;

    display: flex;
    flex-direction: column;


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

    .mainCard {

        width: 100%;
        margin-bottom: 1rem;

        display: flex;
        flex-direction: column;
        gap:0.2rem;

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

    .mainText {

        width: 90%;
        margin: auto;

        font-family: "Montserrat";
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 15px;

    }

    h2 {

        width: 90%;
        margin: auto;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 1.3rem;

        color: #2927A6;

    }

    li {

        width: 90%;
        height: 4.4rem;
        margin: auto;
        margin-bottom: 1rem;

        display: flex;
        gap: 0.2rem;

    }

    .liCardImg {

        width: 84px;
        height: 70px;   

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

        color: #2927A6;


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

        color: #383838;

    }

    a {

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 12px;
        text-decoration: none;

        color: #F66813;

    }

`