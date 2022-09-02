import styled from "styled-components";

export const Main = styled.main`

    height: 29rem;
    
    @media (min-width: 600px) {

        margin-top: 3rem;
        
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: rgba(255, 255, 255, 0.5);
        
    }

    .img-responsive {

        height: 23rem;
        width: 23rem;
        background: url(.svg);

    }


    @media (max-width: 700px) {
        
        .img-responsive {

            display: none;

        }

    }

    

`

export const Form = styled.form`

    width: 100%;
    height: 29rem;

    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background-color: #FFFFFF;

    @media (min-width: 600px) {

        width: 20rem;
        height: 29rem;
        border-radius: 4px;

        display: flex ;
        flex-direction: column;
        justify-content: center;


    }

    @media (min-width: 600px) {
        
        

    }

    h3 {

        width: 100%;

        display: flex ;
        align-items: center;
        justify-content: center;

        font-family: 'Jura';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 28px;

    }

    p {

        font-family: 'Jura';
        font-size: 0.8rem;

    }

    .groupInput {

        position: relative;
        display: flex;
        cursor: pointer;
        
    }

    .groupInput:hover > .mensagemError > span {

        opacity: 1;

    }

    span {

        position: absolute;
        transition: 1s;
        opacity: 0;

        width: 5rem;
        height: 2rem;
        
        left: 19rem;
        top: 0rem;

        background: #F66813;
        color: #fefeff;

        font-family: 'Jura';
        font-size: 0.8rem;
        text-align: center;
        text-transform: uppercase;

    }

    fieldset {

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

    }

    label {

        width: 90%;
        height: 3.13rem;
        margin: 0 0.8rem;

    }

    input {
        
        width: 100%;
        margin-top: 0.5rem;

        border: none;
        outline: none;
        flex:1 ;

    }

    input::placeholder {

        font-family: 'Public Sans';
        font-size: 0.8rem;

    }

    button {

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        gap: 10.15px;

        width: 17rem;
        height: 3rem;

        background: #F66813;

        border: 1.2182px solid #F66813;
        border-radius: 4.06066px;

        font-family: 'Jura';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 26px;

        color: #FFFFFF;

    }

    a {

        color: #F66813;

    }

    .line {

        width: 100%;
        height: 0.5px;
        background-color:#383838;

        margin-top: 0.5rem;
    }

`