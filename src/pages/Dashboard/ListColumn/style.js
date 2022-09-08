import styled from "styled-components";

export const StyledListColumn = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 48%;
    border-radius: 4px;
  }

  input {
    text-align: center;
  }
`;
