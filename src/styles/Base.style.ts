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
                line-height: 1.3;
            }

            .App {
                min-height: 100vh;
            }
            .ant-divider-horizontal {
                background: red;
                width:1380px;
                margin-right:60px;
            }

        }
    }
`