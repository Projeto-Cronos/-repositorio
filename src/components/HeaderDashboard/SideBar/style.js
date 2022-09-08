import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  padding: 70px 16px 22px 16px;
  position: fixed;
  height: 100%;
  width: 280px;
  top: 0px;
  left: ${(props) => (props.isSideBarVisible ? "0" : "-100%")};
  background-color: ${(props) => props.theme.white};
  box-shadow: -17px 27px 28px 10px ${(props) => props.theme.shadow};
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
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    clip-path: circle(50% at 50% 50%);
    width: 108px;
    height: 108px;
    background-color: red;
  }
  .img img {
    width: 188.925px;
    clip-path: circle(50% at 50% 50%);
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
      color: ${(props) => props.theme.grey2};
    }

    p {
      font-size: 14px;
      color: ${(props) => props.theme.grey2};
    }
  }
`;

export const SideBarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme.black};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
