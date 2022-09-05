import styled from "styled-components";

export const StyledListBody = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;
