import {createGlobalStyle} from "styled-components"

export const BaseStyle = createGlobalStyle`
    html {
        body {
            min-height: 100vh;
            margin: 0;
            padding: 0;

            * {
                margin: 0;
                padding: 0;
                list-style: none;
                box-sizing: border-box;
                text-decoration: none;
            }

            .App {
                min-height: 100vh;
            }

        }
    }
`