import styled from "styled-components";
import  background from "../../assets/image/background-orange-white.svg"

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100vh;
    background-image: url(${background});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`