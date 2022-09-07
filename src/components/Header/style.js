 
    import styled from "styled-components";
    import { Link } from "react-router-dom";
    
    export const NavbarContainer = styled.nav`
      width: 100%;
      height: ${(props) => (props.extendNavbar ? "90vh" : "80px")};
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between  ;
      box-shadow: 5px 6px 3px rgb(0 0 0 / 39%);
      z-index: 1;
    
      @media (min-width: 375px) {
        height: 80px;
        z-index: 1;
      }
    `;
    
    export const LeftContainer = styled.div`
      width: 60%;
      display: flex;
    `;
    
    export const RightContainer = styled.div`
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `;
    
    export const NavbarInnerContainer = styled.div`
      width: 100%;
      height: 80px;
      display: flex;
    `;
    
    export const NavbarLinkContainer = styled.div`
      display: flex;
      padding: 2px 2px 0px 0px;
    `;
    
    export const NavbarLink = styled(Link)`
      color: #000000;
      font-size: large;
      font-family: "Jura";
      text-decoration: none;
      margin: 10px;

      :hover {
        color: #F66813;
      }
      
      :nth-child(4n) {
        background-color: white;
        border: 0.5px solid #757575;
        border-radius: 13px;
        width: 70px;
        height: 33px;
        margin: 6px;
        padding: 6px 5px 8px 10px;
      }

      :nth-child(4n):hover {
        background-color: #F4F4F4;
        color: #000000;
      }
    
      @media (max-width: 375px) {
        display: none;
      }
    `;
    
    export const NavbarLinkExtended = styled(Link)`
      color: black;
      font-size: x-large;
      font-family: "Jura";
      text-decoration: none;
      margin: 10px;
    `;
    
    export const Logo = styled.img`
      margin: 10px;
      max-width: 180px;
      height: auto;
      padding: 2px 0px 0 0;
    `;
    
    export const OpenLinksButton = styled.button`
      width: 50px;
      height: 50px;
      background: none;
      border: none;
      color: white;
      font-size: 45px;
      cursor: pointer;
      color: #000000;
      padding: 0 0 0 0;
    
      @media (min-width: 375px) {
        display: none;
      }
    `;
    
    export const NavbarExtendedContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      row-gap: 35px;
      padding-top: 45px;
    
      @media (min-width: 375px) {
        display: none;
        height: 100px;
      }
    `;