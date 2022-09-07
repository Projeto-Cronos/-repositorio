import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--white);

  .FooterHome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    height: 100%;
    padding: 1vw;
    background-color: #fff;
  }

  .Logo {
    width: 15vw;
  }

  .Copyright {
    font-size: 2.5vw;
    padding-right: 2vw;
  }
  @media (min-width: 768px) {
    background-color: var(--white);
    .FooterHome {
      width: 78%;
    }
    .Logo {
      width: 10vw;
    }

    .Copyright {
      font-size: 1.2vw;
    }
  }
  @media (min-width: 1024px) {
    background-color: var(--white);
    .FooterHome {
      width: 78%;
    }

    .Logo {
      width: 9vw;
    }

    .Copyright {
      font-size: 12px;
    }
  }
`;