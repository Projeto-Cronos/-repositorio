import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  padding: 22px 16px;
  position: fixed;
  height: 100%;
  width: 280px;
  top: 64px;
  left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
  background-color: var(--white);
  box-shadow: 0px 20px 32px rgba(0, 0, 0, 0.25);
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      transform: translateX(-280px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;

    svg {
      font-size: 3rem;
    }

    h3 {
      font-size: 22px;
      font-weight: 500;
      color: var(--grey-1);
    }

    p {
      font-size: 14px;
      color: var(--grey-2);
    }
  }
`;

export const SideBarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: var(--black);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
