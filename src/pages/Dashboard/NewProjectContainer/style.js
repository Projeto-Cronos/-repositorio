import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.white};

  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;

  box-shadow: 0px 2px 16px ${(props) => props.theme.shadow};

  @media (max-width: 768px) {
    padding: 10px;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 0 auto; */
    width: 100%;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 10px;
    }
    .boxNameProject {
      border-radius: 4px;
      width: 30%;
      input {
        width: 100%;
        outline: none;
        background-color: ${(props) => props.theme.grey4};
        color: ${(props) => props.theme.black};
      }
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;
    align-items: center;
    cursor: pointer;

    width: 30%;

    :hover .dropdownContent {
      display: block;
    }
  }
  .labelDate {
    width: 10%;
  }
  .boxLabelDate {
    display: flex;
    justify-content: space-between;
    width: 50%;
    color: ${(props) => props.theme.black};
  }

  .valuePerHour {
    width: 0%;
    width: fit-content;
    color: ${(props) => props.theme.black};
  }

  .dropdownContent {
    display: none;
    position: absolute;
    z-index: 1;
    border-radius: 4px;
    padding: 4px;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0px 2px 16px ${(props) => props.theme.shadow};
    outline: none;
    width: fit-content;

    input {
      outline: none;
      width: 185px;
      height: 48px;
    }
  }

  button {
    background: ${(props) => props.theme.blue1};
    /* background: transparent; */
    padding: 10px 12px;
    border: none;
    border-radius: 8px;
    font: inherit;
    font-weight: 500;
    color: ${(props) => props.theme.grey1};
    color: white;

    :hover {
      background-color: var(--blue-2);
    }
  }
`;

export const BoxTimer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 18%;
  .boxTimer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    span {
    }
  }
  .boxBtn {
    display: flex;
    width: 18%;
    gap: 20%;
    button {
      width: max-content;
      cursor: pointer;
      padding: 0;
      :focus {
        color: ${(props) => props.theme.orange2};
      }
    }
  }
`;
