import styled from "styled-components";

export const DashboardMain = styled.main`
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
  min-height: 100vh;
  padding: 124px 60px 0 60px;

  input {
    border: none;
    padding: 10px;
    font: inherit;
  }
`;
