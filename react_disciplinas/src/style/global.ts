import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #87CEFA;
    --text: black;
    --button: #5B95BD;
 
}
* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
}
body {
    color: var(--text);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, button{
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
}
button {
    cursor:pointer;
}
`;