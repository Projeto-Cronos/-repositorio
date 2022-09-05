import styled from "styled-components";

export const StyledListSmallColumn = styled.div`
  width: 4.75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    box-sizing: initial;
    padding: 8px;
    width: fit-content;
    border: 1px solid var(--grey-2);
    border-radius: 4px;
  }
`;
