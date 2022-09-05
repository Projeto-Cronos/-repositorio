import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items:center;
  width: 100%;

  .newsMainContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    gap:3vw;
  }
  .newsMainHeader {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }
  .newsMainTitle {
    font-weight: 700;
    font-size: 7vw;
    line-height: 7vw;
    color: var(--blue-1);
    font-family: "Jura", sans-serif;
    max-width: 22ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .newsMainDate {
    font-style: normal;
    font-weight: 600;
    font-size: 2.5vw;
    line-height: 2vw;
    color: var(--grey-1);
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
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .newsMainLink {
    width:40%;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2vw;
    line-height: 3.2vw;
    text-align: start;
    color: var(--orange-1);
    background-color: var(--transparent);
    text-transform: uppercase;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
  .newMainImage {
    width: 90%;
  }
  .newMainImage img {
    width: 100%;
    border-radius: 1vw;
  }
  @media (min-width: 768px) {
    display: flex;
      width: 100%;
      align-items:none;
      flex-direction: row;

      .newsMainContent {
        width: 50%;
        padding: 0 1vw 0 0;
        gap:4.3vw;
      }
      .newsMainHeader {
        gap: 0.5vw;
      }
      .newsMainTitle {
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
        -webkit-line-clamp: 7;
      }
      .newsMainLink {
        width: 30%;
        font-size: 1.1vw;
        line-height: 1vw;
      }
      .newMainImage {
        width: 50%;
      }
      .newMainImage img {
        border-radius: 0.3vw;
      }
  }
    @media (min-width: 1024px) {
      display: flex;
      width: 100%;
      align-items:none;
      flex-direction: row;

      .newsMainContent {
        width: 50%;
        padding: 0 1vw 0 0;
        gap:4.3vw;
      }
      .newsMainHeader {
        gap: 0.5vw;
      }
      .newsMainTitle {
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
        -webkit-line-clamp: 7;
      }
      .newsMainLink {
        width: 30%;
        font-size: 1.1vw;
        line-height: 1vw;
      }
      .newMainImage {
        width: 50%;
      }
      .newMainImage img {
        border-radius: 0.3vw;
      }
    }
`;
