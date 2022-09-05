import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);

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
    background-color: var(--white);
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);
  }

  button {
    background: var(--blue-1);
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font: inherit;
    font-weight: 500;
    color: white;

    :hover {
      background-color: var(--blue-2);
    }
  }
`;
