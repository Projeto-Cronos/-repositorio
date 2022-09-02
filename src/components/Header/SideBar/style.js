import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 22px 16px;
  position: fixed;
  height: 100%;
  top: 64px;
  width: 160px;
  left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
  background-color: var(--white);
  box-shadow: 0px 20px 32px rgba(0, 0, 0, 0.25);
  animation: showSidebar 0.4s;

  @media screen and (min-width: 950px) {
    position: initial;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: initial;
    background-color: transparent;
  }

  img {
    height: 20px;

    @media screen and (min-width: 950px) {
      display: none;
    }
  }

  a {
    font-family: "Jura", sans-serif;
    font-size: 28px;
    text-decoration: none;
    color: var(--black);
  }
`;
