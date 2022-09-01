import styled from "styled-components";

export const Main = styled.main`

    width: 100%;
    height: 29rem;
    
    @media (min-width: 600px) {
        
        margin:1rem;
        margin-top: 3rem;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        

    }

    .img-responsive {

        height: 23rem;
        width: 23rem;

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

    background-color: rgba(255, 255, 255, 0.5);

    @media (min-width: 600px) {

        height: 25rem;
        width: 40%;
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

    fieldset {

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    label {

        width: 90%;
        height: 3.13rem;
        margin: 0 0.8rem;

    }

    input {
        
        margin-top: 0.5rem;

        border: none;

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

    div {

        width: 100%;
        height: 0.5px;
        background-color:#383838;

        margin-top: 0.5rem;
    }

`