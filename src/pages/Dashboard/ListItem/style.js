import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);
  cursor: pointer;

  input {
    width: 100%;
  }
`;
