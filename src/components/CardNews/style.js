import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  list-style: none;
  width: 85%;
  height: min-content;

  .newsRandom {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .newsRandomContent {
    display: flex;
    height: min-content;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 2.5vw;
  }
  .newsRandomHeader {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }
  .newsRandomTitle {
    font-weight: 700;
    font-size: 5vw;
    color: var(--blue-1);
    font-family: "Jura", sans-serif;
    max-width: 23ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .newsRandomDate {
    font-style: normal;
    font-weight: 600;
    font-size: 2vw;
    line-height: 2vw;
    color: var(--grey-1);
  }
  .newsRandomText {
    height: min-content;
    font-style: normal;
    font-weight: 400;
    font-size: 3vw;
    line-height: 3vw;
    color: var(--grey-1);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .newsRandomLink {
    width: 40%;
    font-style: normal;
    font-weight: 500;
    font-size: 2.8vw;
    line-height: 2.8vw;
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
  .newRandomImage {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 25vh;
  }
  .newRandomImage img {
    width: 100%;
    border-radius: 1vw;
  }

  @media (min-width: 768px) {
    width: 45%;
    height: min-content;
    list-style: none;

    .newsRandomContent {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      gap: 200vw;
    }
    .newsRandomContent {
      gap: 2vw;
    }
    .newsRandomHeader {
      padding: 0.5vw 0;
      gap: 1vw;
    }
    .newsRandomTitle {
      font-size: 1.55vw;
      max-width: 34ch;
    }
    .newsRandomDate {
      font-size: 1.05vw;
      line-height: 1.4vw;
    }
    .newsRandomText {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }
    .newsRandomLink {
      font-size: 1.1vw;
      line-height: 1vw;
    }
    .newRandomImage {
      height: 20vh;
    }
    .newRandomImage img {
      border-radius: 0.3vw;
    }
  }
  @media (min-width: 1024px) {
    width: 45.85%;
    height: min-content;
    list-style: none;

    .newsRandomContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      gap: 2vw;
    }
    .newsRandomContent {
      gap: 2.5vw;
    }
    .newsRandomHeader {
      gap: 0.5vw;
    }
    .newsRandomTitle {
      font-size: 1.55vw;
      max-width: 34ch;
    }
    .newsRandomDate {
      font-size: 1.05vw;
      line-height: 1.4vw;
    }
    .newsRandomText {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }
    .newsRandomLink {
      font-size: 1.1vw;
      line-height: 1vw;
    }
    .newRandomImage {
      height: 33vh;
    }
    .newRandomImage img {
      border-radius: 0.3vw;
    }
  }
`;
