import styled from "styled-components";
import background from "../../assets/image/background-home.svg";

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    background-color: ${(props) => props.theme.grey4}; 
`


export const HeaderContent = styled.div`
    .HeaderTitle {
        width: min-content;
        border-radius: 0px;
        font-size: 50px;
        font-family: "Jura";
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        margin: 80px 0 0 35px;
        filter: drop-shadow(0px 4px 4px ${(props) => props.theme.shadow});
        color:${(props) => props.theme.black};
        z-index: 1;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            height: 404px;
            width: 382px;
            left: 167px;
            top: 125px;
            font-size: 80px;
            margin: 63px 0 0 167px;
        }
    }
    .HeaderSubtitle {
        font-size: 20px;
        text-align: left;
        letter-spacing: -1.2385px;
        color: #fff;
        border-radius: 0px;
        font-family: "Jura";
        font-weight: 700;
        padding: 10px 0 0 40px;
        margin: 0 0 0 0; 
        color:${(props) => props.theme.white};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 30px;
            left: 167px;
            top: 459px;    
            padding: 0;
            margin: -67px 0 0 175px;
            text-align: left;
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
        left: 54%;
        margin-left: -47px;
        display: block;
        height: 42px;
        width: 146px;
        font-size: 15px;
        line-height: 42px;
        color:${(props) => props.theme.white};
        border-radius: 100%;
        text-decoration: none;
        transition: all .3s ease-in-out; 
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            left: 50%;
        }
    }
    .Smoothscroll:hover { 
        color:${(props) => props.theme.orange1};
    }
    i {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 4px 69px 0 0; 
        border: 0;
        outline: 0;
        font-size: 170%;
        vertical-align: baseline;
        background: transparent;
    
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
        }
    }    
    
    i:before,
    i:after {
        content: "";
        display: block;
        position: absolute;
        left: 12px;
        right: 80px;
        top: 30px;
        bottom: -45px;
        border-radius: 50%;
        border: 2px solid ${(props) => props.theme.orange1};
        animation: animar 2s infinite;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
        }
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
    }
`

export const SecondSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:min-content;
    background: ${(props) => props.theme.white};
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover; 
    
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        height:min-content;
        position: relative;
    }
    .SecondSectionTitle {
        width: 100%;
        font-family: "Inter";
        font-size: 22px;
        text-align: center;
        padding-top: 30px;
        font-weight: 500;
        color:${(props) => props.theme.black};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 44px;
        }
    }
    .SecondSectionP {
        width: 100%;
        display: flex;
        flex-direction: row;
        font-family: "Inter";
        font-size: 12px;
        text-align: center;
        padding-top: 13px;
        justify-content: center;
        color:${(props) => props.theme.black};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 18px;
        }
    }
    .CronosP {
        width: 20%;
        color: ${(props) => props.theme.orange1};
        text-align: center;
        font-weight: 600;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            width: 7%;
        }
    }
    .Content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        align-content: flex-end;
        justify-content: center;
        flex-wrap: wrap;
        padding: 37px 20px 0 20px;
        row-gap: 0px;
        column-gap: 10px;
        flex: none;
        order: 1;
        flex-grow: 0;
        color:${(props) => props.theme.black};
        @media (min-width: 768px) {
            padding: 37px 20px 65px 20px;
        }
        @media (min-width: 1024px) {
            padding: 20px 130px 20px 130px;
            flex-direction: wrap;
            flex-wrap: wrap;
            column-gap: 100px;
        }
    }
    .Image1 {
        width: 100%;
        height: 205px;
        @media (min-width: 768px) {
            width: 60%;
        }
        @media (min-width: 1024px) {
            width: 380px;
            height: 220px;
        }
    }
    .Image1 img {
        width: 100%;
        height: 185px;
        @media (min-width: 768px) {
            height: 220px;
        }
        @media (min-width: 1024px) {
            width: 380px;
            height: 220px;
        }
    }
    .FirstTopic {
        width: 100%;
        height: 190px;
        padding: 15px 2px 3px 18px;
        @media (min-width: 768px) {
            height: 150px;
        }
        @media (min-width: 1024px) {
            width: 400px;
            height: 210px;
            padding: 30px 0px 3px 0px;
        }
    }
    .FirstTopic h2 {
        width: 100%;
        font-family: "Jura";
        font-size: 18px;
        font-weight: 600;
        
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 30px;
        text-align: center;
        }
    }
    .FirstContent {
        width: 100%;
        height: 115px;
        font-size: 14px;
        @media (min-width: 768px) {
            height: 200px;
        }
        @media (min-width: 1024px) {
            width: 380px;
            height: 220px;
            text-align: center;
        }
    }
    .SecondTopic {
        width: 100%;
        height: 190px;
        padding: 0px 2px 3px 16px;
        @media (min-width: 768px) {
            height: 150px;
        }
        @media (min-width: 1024px) {
            width: 400px;
        height: 240px;
        padding: 30px 0px 3px 0px;
        }
    }
    .SecondTopic h2 {
        width: 100%;
        font-family: "Jura";
        font-size: 18px;
        font-weight: 600;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 30px;
        text-align: center;
        }
    }
    .SecondContent {
        width: 100%;
        height: 190px;
        font-size: 14px;      
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            width: 380px;
            height: 220px;
            text-align: center;
        } 
    }
    .Image2 {
        width: 100%;
        height: 205px;   
        @media (min-width: 768px) {
            width: 60%;
        }
        @media (min-width: 1024px) {
            width: 380px;
        height: 220px;
        margin-bottom: 20px;
        }   
    }
    .Image2 img {
        width: 100%;
        height: 185px;
        @media (min-width: 768px) {
            height: min-content;
        }
        @media (min-width: 1024px) {
            width: 380px;
            height: 220px;
        }
    }
`

export const LastSection = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height: min-content;
    height:min-content;
    background-color:${(props) => props.theme.orange1};
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;   
    
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        height:100vh;
    position: relative;
    }
    .Container {
        width: 70%;
        align-self: center;
        margin: auto;
        padding-top: 10px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            padding-top: 80px;
        }
    }
    .LastSectionTitle {
        width: 100%;
        font-family: "Inter";
        font-size: 22px;
        text-align: center;
        padding-top: 30px;
        font-weight: 500;
        color:${(props) => props.theme.white};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 44px;
        }
    }
    .LastSectionP {
        width: 100%;
        display: flex;
        flex-direction: row;
        font-family: "Inter";
        font-size: 14px;
        text-align: center;
        padding-top: 13px;
        justify-content: center;
        color:${(props) => props.theme.white};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            font-size: 18px;
            color:${(props) => props.theme.black};
        }
    }
    .Resources {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: auto;
            height: inherit;
            margin: 0px 50px 80px 50px;
            column-gap: 30px;
            @media (min-width: 768px) {
            }
            @media (min-width: 1024px) {
                flex-direction: row;
                justify-content: space-evenly;
                margin: 0px 50px 0px 50px;
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
        margin-top: 40px;
        float: left;
        margin-left: 10px;
        background-color: ${(props) => props.theme.white};
        border-radius: 50px;
        padding: 26px 0 0 25px;
        color: ${(props) => props.theme.blue1};
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            margin-top: 50px;
            padding: 28px 0 0 27px;
        }
    }
    .Div1 h3 {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }
    .Div1 p {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 12px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
           font-size: 14px;
        }
    }
    .Div2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            row-gap: 15px;
        }
    }
    .Div2 i {
        width: 100px;
        height: 100px;
        margin-top: 40px;
        float: left;
        margin-left: 10px;
        background-color: ${(props) => props.theme.white};
        border-radius: 50px;
        padding: 26px 0 0 25px;
        color: #272586;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            margin-top: 50px;
            padding: 28px 0 0 27px;
        }
    }
    .Div2 h3 {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }
    .Div2 p {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 12px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
           font-size: 14px;
        }
    }
    .Div3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
           row-gap: 15px;
        }
    }
    .Div3 i {
        width: 100px;
        height: 100px;
        margin-top: 40px;
        float: left;
        margin-left: 10px;
        background-color: ${(props) => props.theme.white};
        border-radius: 50px;
        padding: 26px 0 0 25px;
        color: #272586;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
           margin-top: 50px;
           padding: 28px 0 0 27px;
        }
    }
    .Div3 h3 {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 24px;
        font-weight: 600;
    }
    .Div3 p {
        text-align: center;
        color:${(props) => props.theme.white};
        font-family: inter;
        font-size: 12px;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
           font-size: 14px;
        }
    }
    .Div1, .Div2, .Div3 path {
        margin: 0;
    }
`

export const Scroll3 = styled.div`
    .ScrollDown3 {
        margin: 0 0 30px 0;
        scroll-behavior: smooth;
    }
       
    .Smoothscroll3 {
        bottom: 78px;
        left: 50%;
        margin: auto;
        display: block;
        height: 60px;
        width: 146px;
        font-size: 20px;
        line-height: 42px;
        color:${(props) => props.theme.black};
        border-radius: 100%;
        text-decoration: none;
        transition: all .3s ease-in-out; 
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            position: absolute;
            margin-left: -47px;
            heigth: 42px;
        }
    }
    .Smoothscroll3:hover { 
        color:${(props) => props.theme.white};
    }
    i {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0px 0 0 0; 
        border: 0;
        outline: 0;
        font-size: 165%;
        vertical-align: baseline;
        background: transparent;
        -webkit-animation: pulse 1s ease infinite;
        -moz-animation: pulse 1s ease infinite;
        -ms-animation: pulse 1s ease infinite;
        -o-animation: pulse 1s ease infinite;
        animation: pulse 1s ease infinite;
        @media (min-width: 768px) {
        }
        @media (min-width: 1024px) {
            position: relative;
            padding: 63px 34px 0 0; 
            font-size: 170%;
        }
    }    
    
   
`