import styled from "styled-components";

export const ContainerCalculator = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 50px;

    font-family: 'Jura', sans-serif;

    background-color: #F4F4F4;

    padding-bottom: 40px;

`

export const MainCalculator = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 110px;
    gap: 30px;

    h1{
        font-size: 18px;
        font-weight: 700;
    }
`

export const FormCalculator = styled.form`
    display: flex;
    flex-direction: column;

    gap: 30px;
    width: 265px;
    margin-top: 10px;

    .box__select{
        display: flex;
        flex-direction: column;

        select{
            display: flex;
            padding: 15px 0;

            color: #757575;

            border: none;
            border-bottom: 1px solid #383838;

            outline: none;

            background: transparent;

        }
    }

    .box__btn{
        display: flex;
        justify-content: center;

        width: 100%;

        margin-top: 10px;

        button{
            width: 90%;
            height: 40px;

            font-family: 'Jura', sans-serif;
            
            border: none;
            border-radius: 4px;

            color: #ffffff;
            background-color: #2927A6;
        }

        button:hover{
            background-color: #272586;
        }
    }
`

export const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;

    h2{
        color: #DF3B19;
        font-weight: 800;
    }
    
    div{
        display: flex;
        flex-direction: column;

        gap: 10px;
        
        text-align: center;
        width: 70%;
        p{
            line-height: 20px;
        }
        span{
            color: #F66813;
            font-weight: 700;
        }
    }
`