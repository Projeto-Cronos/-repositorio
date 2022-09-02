import styled from "styled-components";
import  background from "../../assets/image/background-orange-white.svg"

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`
export const Div = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:78%;
        gap:10vw;
        
        .img {
                width:60%;
        }
        @media(max-width: 950px) {
                width:60%;
        }
        @media(max-width: 600px) {
                width:90%;
        }
`
export const Title = styled.h1`
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 2vw;
        margin-bottom: 1vw;
        color: var(--black);
        text-align:center;
        font-family: 'Jura', sans-serif;
        
        @media(max-width: 950px) {
                font-size: 2.5vw;
                line-height: 3.5vw;
        }
        @media(max-width: 600px) {
                font-size: 5vw;
                line-height: 7vw;
        }
`
export const Form = styled.form`
        width:40%;
        display: flex;
        flex-direction: column;
        padding: 3% 3% 3% 3%;
        align-items:center;
        gap: 1vw;
        background: var(--white);
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0.3vw;

        .dropdown {
                position: relative;
                display: inline-block;
        }

        .dropdown-content {
                display: none;
                position: absolute;
                background-color: var(--white);
                width: 100px;
                width: 150px;
                box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.2);
                padding: 1vw 1vw;
                z-index: 1;
                font-size:0.9vw;
                border-radius:0.15vw;
                color: var(--red-2)
                tex
        }

        .dropdown:hover .dropdown-content {
                display: block;
        }

        .containerInput {
                display: flex;
                flex-direction:column;
                width: 90%;
        }
        
        .contentInput{
                display:flex;
                width:100%;
               
                background: var(--white);
                border-top: none;
                border-left:none;
                border-right:none;
                border-bottom: 0.15vw solid var(--black);
        }
        .fixed{
                display:flex;
                align-items:center;
                font-size:1.3vw;
                margin-right:0;
                color: var(--black);
                background: var(--white);
                border:none;
        }
        .fixed-eye{
                display:flex;
                align-items:center;
                font-size:1.3vw;
                margin-right:0;
                cursor: pointer;
                color: var(--black);
                background: var(--white);
                border:none;
        }
        .alert{
                display:flex;
                align-items:center;
                font-size:1.4vw;
                margin-right:0;
                color: var(--red-1);
                background: var(--white);
                border:none;
        }
        @media(max-width: 950px) {
                gap: 4vw;
                .contentInput {
                        font-size: 2vw;
                        height: 8vh;
                }
                .fixed{
                        font-size: 2vw;
                        height: 8vh;     
                }
                .alert{
                        font-size: 2vw;
                        height: 8vh;     
                }
        }
        @media(max-width: 600px) {
                gap: 6.4vw;
                
                .contentInput {
                        border-radius: 1.5vw;
                        font-size: 4vw;
                        height: 7.3vh;
                }
                .fixed{
                        border-radius: 1.5vw;
                        font-size: 4vw;
                        height: 7.3vh;
                }
                .alert{
                        font-size: 2vw;
                        height: 8vh;     
                }
}
`
export const Input = styled.input`
        outline:none;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: 0;
        width: 100%;
        height: 5.5vh;
        background: var(--white);
        font-weight: 400;
        font-size: 1.05vw;
        color: var(--grey-2);
        border: none;
        
        @media(max-width: 950px) {
     
                font-size: 2vw;
                height: 8vh;
        }
        @media(max-width: 600px) {
                font-size: 4vw;
                height: 7.3vh;
        }
`
export const Label = styled.label`
        display:flex;
        flex-direction:column;
        font-weight: 400;
        font-size: 1vw;
        color: var(--black);
        font-family: 'Jura', sans-serif;
        text-align:start;

        @media(max-width: 950px) {
                font-size:1.5vw;
                span{
                font-size:1.5vw;;
        }
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                span{
                font-size: 3vw;;
        }
        }
`
export const ButtonOrange = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--orange-1);
        border: 0.1vw solid var(--orange-1);
        border-radius: 0.2vw;
        font-weight: 600;
        margin-top:1vw;
        font-size: 1.05vw;
        color: var(--white);
        font-family: 'Jura', sans-serif;

        &:hover {
                background: var(--orange-2);
                border: 0.1vw solid var(--orange-2);  
        }
        
        @media(max-width: 950px) {
                height: 8vh;
                font-weight: 600;
                font-size: 2vw;
                border-radius: 0.5vw;
        }
        @media(max-width: 600px) {
                height: 7.3vh;
                font-weight: 600;
                font-size: 4vw;
                border-radius: 1vw;
        }
`
export const ParagraphQuestion = styled.p`
        width:100%;
        font-weight: 600;
        font-size: 0.8vw;
        line-height: 1.1vw;
        color: var(--gray-1);
        margin-top: 1vw;
        text-align:center;
        font-family: 'Jura', sans-serif;

        .link {
            color:var(--orange-1);
            text-decoration:none;

            :hover {
                color:var(--orange-2)
            }
        }
        @media(max-width: 950px) {
                font-size: 1.5vw;
                line-height: 2vw;
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                line-height: 4vw;
        }
`