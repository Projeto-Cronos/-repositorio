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

  @media (max-width: 768px) {
    padding: 94px 16px 0 16px;
  }

  @media (max-width: 1024px) {
    padding: 94px 30px 0 30px;
  }

  input {
    border: none;
    padding: 10px;
    font: inherit;
  }
`;
