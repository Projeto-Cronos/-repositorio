import styled from "styled-components";

export const DashboardMain = styled.main`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 60px 60px 0 60px;

  input {
    border: none;
    padding: 10px 16px;
    font: inherit;
  }
`;

export const NewProjectContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 16px 32px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    align-items: center;
    cursor: pointer;

    :hover .dropdownContent {
      display: block;
    }
  }

  .dropdownContent {
    display: none;
    position: absolute;
    z-index: 1;
    border-radius: 4px;
    padding: 4px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  button {
    background: #2927a6;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font: inherit;
    color: white;
  }
`;
