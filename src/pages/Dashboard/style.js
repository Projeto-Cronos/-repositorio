import styled from "styled-components";

export const DashboardMain = styled.main`
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 124px 60px 0 60px;

  input {
    border: none;
    padding: 10px 16px;
    font: inherit;
  }
`;

export const NewProjectContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
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
    background-color: var(--grey-4);
    box-shadow: 0px 8px 16px 0px var(--shadow);
  }

  button {
    background: var(--blue-1);
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font: inherit;
    color: white;

    :hover {
      background-color: var(--blue-2);
    }
  }
`;

export const ProjectList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .column {
    width: 15%;
    background-color: #ccc;
  }

  .smallColumn {
    width: 4.75%;
    background-color: #ccc;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);
`;

export const ListHeaderTitle = styled.span`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.titleColor === "blue" ? "var(--blue-1)" : "red")};
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0px 0px 40px -10px var(--shadow);

  input {
    width: 100%;
  }
`;
