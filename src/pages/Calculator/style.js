import styled from "styled-components";

export const ContainerCalculator = styled.div`
    display: flex;
    justify-content: center;
    
    font-family: 'Jura', sans-serif;
    gap: 20px;
    /* min-height: 130vh; */
    max-height: 1000px;
    height: 120vh;
    background-color: var(--grey-4);

`
export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    /* height: 100%; */

    top:20%;
    background-color: var(--grey-4);

`
export const MainCalculator = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin: 0 auto;
    height: 100%;
    gap: 30px;
    background-color: var(--grey-4);

    h1{
        font-size: 18px;
        font-weight: 700;
    }
    .btn_refrash{
        position: fixed;
        top: 20%;
/* display: none; */
    }
`
export const FormCalculator = styled.form`
    display: flex;
    flex-direction: column;
    
    gap: 30px;
    width: 265px;
    
    .box__select{
        display: flex;
        flex-direction: column;
        gap: 5px;

        select{
            padding: 15px ;

            color: var(--grey-2);

            border: none;
            border-bottom: 1px solid var(--grey-1) ;
            outline: none;

            background: transparent;

            cursor: pointer;
        }
        span{
            font-size: 12px;
        }
    }

    .box__btn{
        display: flex;
        justify-content: center;

        width: 100%;

        margin-top: 10px;

        button{
            width: 100%;
            height: 40px;

            font-family: 'Jura', sans-serif;
            
            border: none;
            border-radius: 4px;
            
            color: var(--white);

            background-color: var(--blue);
        }

        button:hover{
            background-color: var(--blue-2);
        }
    }
`
export const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;

    padding-bottom: 80px;

    h2{
        color: var(--orange-2);
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
            color: var(--orange);
            font-weight: 700;
        }
    }
`