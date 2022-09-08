import styled from "styled-components";

export const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 16px ${(props) => props.theme.shadow};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ListHeaderTitle = styled.span`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  color:
      ${(props) =>
        props.titleColor === "blue" ? "var(--blue-1)" : "var(--red-1)"};

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
