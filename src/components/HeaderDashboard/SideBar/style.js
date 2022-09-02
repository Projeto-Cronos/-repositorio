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
  width: 280px;
  left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
  background-color: var(--white);
  box-shadow: 0px 20px 32px rgba(0, 0, 0, 0.25);
  animation: showSidebar 0.4s;

  img {
    width: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: var(--black);
  }
`;
