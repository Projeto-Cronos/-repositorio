import styled from "styled-components";
import background from "../../assets/image/background-orange-white.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.grey4};
`;

export const Main = styled.main`
  width: 100%;
  height: min-content;

  background-color: ${(props) => props.theme.white};
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  border-radius: 2px;
  color: ${(props) => props.theme.black};

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 88%;

    margin: 20px 0 auto;
    box-shadow: 0px 4px 32px 0px ${(props) => props.theme.shadow};

    gap: 1rem;

    overflow-y: scroll;
  }

  h1 {
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Jura", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 28px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      margin-top: 3rem;
    }
  }

  .mainCard {
    width: 100%;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

<<<<<<< HEAD
    border-radius: 2px;
    color: ${(props) => props.theme.black};

    @media screen and (min-width: 768px) {
        
        width: 80%;
        height: 88%;
        
        margin: 20px  0 auto;
        box-shadow: 0px 4px 32px 0px ${(props) => props.theme.shadow};

        gap: 1rem;

        overflow-y: scroll;

    }

    h1 {

        margin: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Jura", sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 28px;

    }

    @media screen and (min-width: 768px) {
        
        h1{

            font-size: 2.5rem;
            margin-bottom: 2rem;
            margin-top: 3rem;


        }

    }

=======
  @media screen and (min-width: 768px) {
>>>>>>> 83c0eff3f31f5f3791b3f590aa48f27071c41d6f
    .mainCard {
      flex-direction: row-reverse;
      margin-bottom: 1.5rem;
      padding: 0 2rem;
    }
  }

  .mainInfo {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .mainInfo {
      height: min-content;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

<<<<<<< HEAD
        display: none;

    }

    @media screen and (min-width: 768px) {
        
        .mainInfo {

            height: min-content;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

=======
      /* width: 90%;
            margin: 0 auto;

            display: initial; */
>>>>>>> 83c0eff3f31f5f3791b3f590aa48f27071c41d6f
    }
  }

  .mainContent {
    a {
      width: 90%;
      margin: 0 auto;

      font-style: normal;
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 12px;
      text-decoration: none;

      color: ${(props) => props.theme.orange1};
    }
  }

  @media screen and (min-width: 768px) {
    .mainContent {
      width: 80%;

<<<<<<< HEAD
                color: ${(props) => props.theme.orange1};
        }

    }

    @media screen and (min-width: 768px){
     
        .mainContent {

            width: 80%;

            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            gap: 0.5rem;

            a {
                
                width: 100%;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 0.7rem;
                    line-height: 12px;
                    text-decoration: none;
    
                    color: ${(props) => props.theme.orange1};
    
            }
            
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
            margin-right: 1rem;

        }
        
    }

    .mainText {

        width: 90%;
        margin: auto;

        
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 15px;

    }


    @media screen and (min-width: 768px) {
     
        .mainText {

            margin: 0;

            font-size: 0.6rem;
            font-weight: none;

        }
        
    }

    h2 {

        width: 90%;
        margin: auto;

        font-family: 'Jura';
        font-style: normal;
        font-weight: 500;
        font-size: 1.3rem;

        color: ${(props) => props.theme.blue1};

    }

    @media screen and (min-width: 768px) {
        
        h2 {

            font-size: 1.5rem;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

    }

    @media screen and (min-width: 768px) {
     
        ul {

            width: 90%;
            margin: 0 auto;

            display: flex;
            flex-wrap: wrap;
            gap: 18px;

        }
        
    }

    li {

        width: 90%;
        height: 5.4rem;
        margin: auto;
        margin-bottom: 1rem;
        padding: 0.6rem;

        border-radius: 5px;

        display: flex;
        gap: 0.2rem;
        background: ${(props) => props.theme.white};
        

    }

    @media screen and (min-width: 768px) {
     
        li {

            width: 45%;
            height: 16rem;
            margin: 0.5rem auto;

            flex-direction: column;
        }
        
    }

    .liText {

        display: none;

        width: 90%;
        margin: auto;

        
        font-size: 0.5rem;
        font-weight: 600;
        line-height: 15px;

    }

    @media screen and (min-width:768px) {
        
        .liText {

            display: initial;
            font-size: 0.6rem;

        }

    }

    .liCardImg {

        width: 5.25rem;
        height: 4.4rem;   

    }

    @media screen and (min-width: 768px) {
     
        .liCardImg {

            width: 100%;
            height: 8rem;

        }
        
    }

    img {

        border-radius: 5px;

    }

    @media screen and (min-width: 768px){
        
        .mainCardImg {
    
            width: 100%;
            height: 100%;
            margin: 0;
            overflow: hidden;
        
            
            
            img {
                width: min-content;
                height: min-content;
            }

        }

    }

    @media screen and (min-width: 1024px){
        
        .mainCardImg {

            width: 57rem;
            height: 15rem;

        }

        .liCardImg {
            
            height: 12rem;

        }

        li {

            height: 19rem;

        }

    }

    .containerInfo {

        height: 100%;
        width:70%;
        display: flex;
        gap: 0.3rem;
        flex-direction: column;
        justify-content: space-between;

    }

    @media screen and (min-width: 768px) {

        .containerInfo {

            width: initial;
            gap: 0.5rem;

        }

    }

    h3 {

        font-family: "Jura", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 0.7rem;
        line-height: 20px;
        color: #2927A6;
        max-width: 56ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        color: ${(props) => props.theme.blue1};


    }

    @media screen and (min-width: 768px) {
        
        h3 {

            font-size: 1.2vw;

        }

    }

    @media screen and (min-width: 768px) {

        .spanMain {

            height: min-content;
            width: 100%;

        }

    }

    span {

        height: 2.5rem;
      
        align-items: flex-end;
        
=======
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      gap: 0.5rem;

      a {
        width: 100%;
>>>>>>> 83c0eff3f31f5f3791b3f590aa48f27071c41d6f
        font-style: normal;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 12px;
        text-decoration: none;

        color: ${(props) => props.theme.orange1};
      }
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
      margin-right: 1rem;
    }
  }

  .mainText {
    width: 90%;
    margin: auto;

    font-size: 0.8rem;
    font-weight: 600;
    line-height: 15px;
  }

  @media screen and (min-width: 768px) {
    .mainText {
      margin: 0;

      font-size: 0.6rem;
      font-weight: none;
    }
  }

  h2 {
    width: 90%;
    margin: auto;

    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;

    color: ${(props) => props.theme.blue1};
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1.5rem;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      width: 90%;
      margin: 0 auto;

      display: flex;
      flex-wrap: wrap;
      gap: 18px;
    }
  }

  li {
    width: 90%;
    height: 5.4rem;
    margin: auto;
    margin-bottom: 1rem;
    padding: 0.6rem;

    border-radius: 5px;

    display: flex;
    gap: 0.2rem;
    background: ${(props) => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    li {
      width: 45%;
      height: 16rem;
      margin: 0.5rem auto;

      flex-direction: column;
    }
  }

  .liText {
    display: none;

    width: 90%;
    margin: auto;

    font-size: 0.5rem;
    font-weight: 600;
    line-height: 15px;
  }

  @media screen and (min-width: 768px) {
    .liText {
      display: initial;
      font-size: 0.6rem;
    }
  }

  .liCardImg {
    width: 5.25rem;
    height: 4.4rem;
  }

  @media screen and (min-width: 768px) {
    .liCardImg {
      width: 100%;
      height: 8rem;
    }
  }

  img {
    border-radius: 5px;
  }

  @media screen and (min-width: 768px) {
    .mainCardImg {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;

      img {
        width: min-content;
        height: min-content;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .mainCardImg {
      width: 57rem;
      height: 15rem;
    }

    .liCardImg {
      height: 12rem;
    }

<<<<<<< HEAD
    a {
            
                display: flex;
                
                
                font-style: normal;
                font-weight: 400;
                font-size: 0.7rem;
                line-height: 12px;
                text-decoration: none;
=======
    li {
      height: 19rem;
    }
  }
>>>>>>> 83c0eff3f31f5f3791b3f590aa48f27071c41d6f

  .containerInfo {
    height: 100%;
    width: 70%;
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
    justify-content: space-between;
  }

<<<<<<< HEAD
        }
=======
  @media screen and (min-width: 768px) {
    .containerInfo {
      width: initial;
      gap: 0.5rem;
    }
  }

  h3 {
    font-family: "Jura", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.7rem;
    line-height: 20px;
    color: #2927a6;
    max-width: 56ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
>>>>>>> 83c0eff3f31f5f3791b3f590aa48f27071c41d6f

    color: ${(props) => props.theme.blue1};
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.2vw;
    }
  }

  @media screen and (min-width: 768px) {
    .spanMain {
      height: min-content;
      width: 100%;
    }
  }

  span {
    height: 2.5rem;

    align-items: flex-end;

    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 0.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;

    color: ${(props) => props.theme.grey};
  }

  @media screen and (min-width: 768px) {
    span {
      width: 100%;
      font-size: 1vw;
      line-height: 1.2rem;
    }
  }

  a {
    display: flex;

    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 12px;
    text-decoration: none;

    color: ${(props) => props.theme.orange1};
  }
`;
