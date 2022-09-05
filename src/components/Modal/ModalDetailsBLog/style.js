import styled from "styled-components";

export const SectionModal = styled.section`
    position: fixed;
    display: ${(props) => props.dropdown};
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: var(--shadow);
    backdrop-filter: blur(3.5px);
    inset: 0;
    z-index: 1;
`;
export const DivModal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 85%;
    animation: fadeIn;
    animation-duration: 0.5s;

    @media (min-width: 768px) {
      width: 78%;
    }

    @media (min-width: 1024px) {
    width: 78%;
    }
`;

export const Card = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height:50vh;
      background-color: var(--white);
      border-radius: 1vw;

      .newsMainContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height:50%;
        padding: 5vw;
      }
      .newsMainHeader {
        display: flex;
        flex-direction: column;
        gap: 1vw;
        position: fixed;
        padding:1vw;
        margin-top:140px;
      }
      .newsMainTitle {
        width:80vw;
        font-weight: 700;
        font-size: 3.5vw;
        line-height: 3vw;
        color: var(--blue-1);
        font-family: "Jura", sans-serif;
  
      }
      .newsMainDate {
        font-style: normal;
        font-weight: 600;
        font-size: 1.5vw;
        line-height: 2vw;
        color: var(--black);
      }
      .newsMainText {
        font-style: normal;
        font-weight: 400;
        font-size: 3vw;
        line-height: 3vw;
        color: var(--grey-1);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 11;
        -webkit-box-orient: vertical;
        padding-bottom:3vw;
      }
      .newsMainLinkClose {
        display:flex;
        width: 100%;
        justify-content:flex-end;
        align-items:flex-end;
      }
      .newsMainLinkClose button {
        width: 20%;
        font-style: normal;
        font-weight: 500;
        font-size: 3.3vw;
        line-height: 3.3vw;
        text-align: end;
        color: var(--orange-1);
        background-color: var(--transparent);
        text-transform: uppercase;
        border: none;
        padding: 0 ;
        margin: 0;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
      .newMainImage {
        overflow: hidden;
        width: 100%;
        height: 50vh;
        border-top-right-radius:1vw;
        border-top-left-radius:1vw;
        
      }
      .newMainImage img {
        width: 100%;
        filter: contrast(40%);
      }
  @media (min-width: 768px) {
      height:70vh;
      border-radius: 0.5vw;

      .newsMainContent {
        padding: 4vw;
      }
      .newsMainHeader {
        gap: 1vw;
        position: fixed;
        padding:4vw;
        margin-top:150px;
      }
      .newsMainTitle {
        width:76vw;
        font-size: 2.4vw;
        line-height: 3vw;
      }
      .newsMainDate {
        font-size: 1.1vw;
        line-height: 1vw;
      }
      .newsMainText {
        font-size: 1.8vw;
        line-height: 1.8vw;
        padding-bottom:0;
      }
      .newsMainLinkClose button {
        width: 10%;
        font-size: 1.9vw;
        line-height: 1vw;
      }
      .newMainImage {
        border-top-right-radius:0.5vw;
        border-top-left-radius:0.5vw;
      }
  }
    @media (min-width: 1024px) {
      height:90vh;
      border-radius: 0.2vw;

      .newsMainContent {
        padding: 2vw;
      }
      .newsMainHeader {
        gap: 0.5vw;
        position: fixed;
        padding:1vw;
        margin-top:170px;
      }
      .newsMainTitle {
        width:76vw;
        font-size: 2.4vw;
        line-height: 3vw;
      }
      .newsMainDate {
        font-size: 0.9vw;
        line-height: 1vw;
      }
      .newsMainText {
        font-size: 1.05vw;
        line-height: 1.3vw;
        padding-bottom:0;
      }
      .newsMainLinkClose button {
        width: 10%;
        font-size: 1.1vw;
        line-height: 1vw;
      }
      .newMainImage {
        border-top-right-radius:0.2vw;
        border-top-left-radius:0.2vw;
      }
    }
`;
