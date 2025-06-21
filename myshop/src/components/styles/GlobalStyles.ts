//CSS in TS

import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background-color: #f7f7f7;
}
body, button, input{
    font-family: poppins;
    transition: 0.3s;
}

button{
    cursor: pointer;
    &:hover{
        filter: brightness();
        transition: 0.3s;
    }
}
`;

