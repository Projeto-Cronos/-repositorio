import styled from 'styled-components';

export const StyledHeader = styled.header`
        width:100%;
        display:flex;
        flex-direction:column;
        padding: 10px 0;
        display: flex;
        gap: 20px;
              @media (max-width: 950px) {
                width: 60%;
              }
              @media (max-width: 600px) {
                width: 90%;
              }
        }

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    nav {
        display:flex;
        width:78%;
        align-items:center;
        justify-content:space-between;
    }  
    .link {
        text-decoration:none;
        text-transform: uppercase;
        font-family: 'Jura', sans-serif;
        color: var(--black);
        font-weight: 600;
        font-size: 1.3vw;
    }
    .logo {
        width: 8vw;
    }
`

