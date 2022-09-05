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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  input {
    width: 100%;
  }
`;
