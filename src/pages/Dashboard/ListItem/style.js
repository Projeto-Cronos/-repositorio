import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 16px ${(props) => props.theme.shadow};
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
    background-color:${(props) => props.theme.grey4};
    color:${(props) => props.theme.black};
  }
`;
export const BoxTimer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color:${(props) => props.theme.black};
  background-color:${(props) => props.theme.grey4};
  .boxTimer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    span {
    }
  }
  .boxBtn {
    display: flex;
    justify-content: space-between;
    width: fit-content;

    button {
      width: max-content;
      cursor: pointer;
      background: transparent;
      padding: 0;

      border: none;
      font: inherit;
      font-weight: 500;
      color: ${(props) => props.theme.grey1};

      :focus {
        color: ${(props) => props.theme.orange1};
      }
    }
  }
`;
