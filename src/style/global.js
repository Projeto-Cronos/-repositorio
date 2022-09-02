import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --white:#FFFFFF;
    --black: #000000;
    --grey-1: #383838;
    --grey-2: #757575;
    --grey-3: #FAFAFA;
    --grey-4: #F4F4F4;
    --grey-5: #D9D9D9;
    --orange-1: #F66813;
    --orange-2: #DF3B19;
    --blue-1: #2927A6;
    --blue-2: #155BCB;
    --blue-3: #272586;
    --red-1: #E60000;
    --red-2: #F40000;
    --green-1: #3FE864;
    --yellow-1: #FFCD07;
    --shadow: rgba(0, 0, 0, 0.6);
    --transparent: transparent;
  html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    font-family: 'Inter', sans-serif;
  }

  a, button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
}
  `;

export const ResetCSS = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ::-webkit-scrollbar {
  width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-4);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 20px;     
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
