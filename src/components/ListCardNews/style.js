import styled from "styled-components";

export const ListMain= styled.ul`
    display: flex;
    width: 100%;
    height:min-content;
    flex-direction: column;
    gap: 6.5vw; 

  @media (min-width: 768px) {
    gap: 3.5vw; 
  }
  @media (min-width: 1024px) {
    gap: 2.5vw; 
  }
`;

export const List= styled.ul`
     width: 100%;
      display: flex;
      flex-direction: column;
      align-items:center;
      gap: 8vw;

  @media (min-width: 768px) {
    height: 100%;
      flex-direction: row;
      justify-content:space-between;
      flex-wrap: wrap;
      gap: 3vw;
  }
  @media (min-width: 1024px) {
      height: 100%;
      flex-direction: row;
      justify-content:space-between;
      flex-wrap: wrap;
      gap: 3vw;
  }
`;

 