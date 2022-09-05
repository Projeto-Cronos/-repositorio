import styled from "styled-components";
import  background from "../../assets/image/background-home.svg";

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    @media (max-width: 768px){
        width:118%;
        height:100vh;
    }
`


export const HeaderContent = styled.div`

    .HeaderTitle {
        height: 404px;
        width: 382px;
        left: 167px;
        top: 125px;
        border-radius: 0px;
        font-size: 80px;
        font-family: "Jura";
        font-weight: 600;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        margin: 0 0 0 0;

        position: absolute;

        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
        @media (max-width: 768px){
            left: 20px;
        }
    }

    .HeaderSubtitle {
        font-size: 30px;
        text-align: left;
        letter-spacing: -1.2385px;

        color: #FAFAFA;

        left: 167px;
        top: 459px;
        border-radius: 0px;
        font-family: "Jura";
        font-weight: 700;
        padding: 0px;
        margin: 0 0 0 0;

        position: absolute;

        @media (max-width: 768px){
            left: 20px;
        }
    }
`

export const SecondSection = styled.section`
    position: relative;
    display:flex;
    flex-direction:column;
    width:93%;
    height:100vh;
    background: #fff;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    @media (max-width: 768px){
        width:118%;
        height:160vh;
    }

    .SecondSectionTitle {
        font-family: "Inter";
        font-size: 44px;
        text-align: center;
        padding-top: 30px;
        font-weight: 500;

        @media (max-width: 768px){
            font-size: 38px;
        }
    }

    .SecondSectionP {
        display: flex;
        flex-direction: row;
        font-family: "Inter";
        font-size: 18px;
        text-align: center;
        padding-top: 13px;
        justify-content: center;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    .CronosP {
        color: #F66813;
        text-align: center;
        font-weight: 600;
    }

    .Content {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        align-content: flex-end;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 40px;
        row-gap: 0px;
        column-gap: 10px;
        margin: 0 0 0 0;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .Image1 {
        width: 380px;
        height: 220px;
    }

    .Image1 img {
        width: 380px;
        height: 220px;

        @media (max-width: 768px){
           width: 350px;
           display: flex;
           margin: auto;
        }
    }

    .FirstTopic {
        width: 400px;
        height: 210px;
        padding: 30px 0px 3px 0px;
    }

    .FirstTopic h2 {
        font-family: "Jura";
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }

    .FirstContent {
        width: 380px;
        height: 220px;
        font-size: 14px;
        text-align: center;

        @media (max-width: 768px){
            width: 390px;
            height: 120px;
            font-size: 14px;
         }
    }

    .SecondTopic {
        width: 400px;
        height: 240px;
        padding: 30px 0px 3px 0px;

        @media (max-width: 768px){
            padding-top: 0px;
            height: 180px;
         }
    }

    .SecondTopic h2 {
        font-family: "Jura";
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }

    .SecondContent {
        width: 380px;
        height: 220px;
        font-size: 14px;
        text-align: center;

        @media (max-width: 768px){
            width: 390px;
            height: 120px;
            font-size: 14px;
         }
    }

    .Image2 {
        width: 380px;
        height: 220px;
        margin-bottom: 20px;

        @media (max-width: 768px){
            width: 350px;
            display: flex;
            margin: auto;
         }
    }

    .Image2 img {
        width: 380px;
        height: 220px;

        @media (max-width: 768px){
           width: 350px;
           display: flex;
           margin: auto;
        }
    }
`


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
        color: #fff;
        border-radius: 100%;
        text-decoration: none;
        transition: all .3s ease-in-out; 
    }

    .Smoothscroll:hover { 
        color: #F66813;
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

        -webkit-animation: pulse 1s ease infinite;
        -moz-animation: pulse 1s ease infinite;
        -ms-animation: pulse 1s ease infinite;
        -o-animation: pulse 1s ease infinite;
        animation: pulse 1s ease infinite;
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
        border: 2px solid #F66813;
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
            transform: scale(1.0);
            opacity: 0;
        }
`

export const Scroll2 = styled.div`

    position: relative;

    .ScrollDown2 {
       margin: 0 0 0 0;
       scroll-behavior: smooth; 
    }

    .Smoothscroll2 {
        position: absolute;
        bottom: 210px;
        left: 50%;
        margin-left: -47px;
        display: block;
        height: 42px;
        width: 146px;
        font-size: 20px;
        line-height: 42px;
        color: #000000;
        border-radius: 100%;
        text-decoration: none;
        transition: all .3s ease-in-out; 
    }

    .Smoothscroll2:hover { 
        color: #F66813;
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

        -webkit-animation: pulse 1s ease infinite;
        -moz-animation: pulse 1s ease infinite;
        -ms-animation: pulse 1s ease infinite;
        -o-animation: pulse 1s ease infinite;
        animation: pulse 1s ease infinite;
    }    
    
    i:before, i:after {
        content: "";
        display: block;
        position: absolute;
        left: 29px;
        right: 65px;
        top: -4px;
        bottom: -9px;
        border-radius: 50%;
        border: 2px solid #f66813;
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
            transform: scale(1.0);
            opacity: 0;
        }
`


export const LastSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-color: #f66813;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    @media (max-width: 768px){
        width: 118%;
        height: 160vh;
     }

    .Container {
        width: 70%;
        align-self: center;
        margin: auto;
        padding-top: 80px;

        @media (max-width: 768px){
            width: 100%;
            padding-top: 25px;
        }
    }

    .LastSectionTitle {
        font-family: "Inter";
        font-size: 44px;
        text-align: center;
        padding-top: 30px;
        font-weight: 500;
        color: #fff;

        @media (max-width: 768px){
            font-size: 34px;
            padding-left: 6px;
        }
    }

    .LastSectionP {
        display: flex;
        flex-direction: row;
        font-family: "Inter";
        font-size: 18px;
        text-align: center;
        padding-top: 13px;
        justify-content: center;
        color: #fff; 
    }

    .Resources {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: auto;
        height: inherit;
        margin: 0px 50px 0px 50px;
        column-gap: 30px;

        @media (max-width: 768px){
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: auto;
            height: inherit;
            margin: 0px 50px 0px 50px;
            column-gap: 30px;
        }
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
        background-color: #fff;
        border-radius: 50px;
        padding: 28px 0 0 27px;
        color: #2927A6;
    }

    .Div1 h3 {
        text-align: center;
        color: #fff;
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }

    .Div1 p {
        text-align: center;
        color: #fff;
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
        background-color: #fff;
        border-radius: 50px;
        padding: 28px 0 0 27px;
        color: #2927A6;
    }

    .Div2 h3 {
        text-align: center;
        color: #fff;
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }

    .Div2 p {
        text-align: center;
        color: #fff;
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
        background-color: #fff;
        border-radius: 50px;
        padding: 28px 0 0 27px;
        color: #2927A6;
    }

    .Div3 h3 {
        text-align: center;
        color: #fff;
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }

    .Div3 p {
        text-align: center;
        color: #fff;
        font-family: inter;
        font-size: 14px;
    }

    .Div1, .Div2, .Div3 path {
        margin: 0;
    }
`

