import styled from "styled-components";

export const StyledListSmallColumn = styled.div`
  width: 4.75%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    color: ${(props) => props.theme.black};
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: min-content;
  }

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: initial;
    padding: 8px;
    background-color: ${(props) => props.theme.grey4};
    border-radius: 4px;
    button {
      width: 100%;
    }
  }
`;
