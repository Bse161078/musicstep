import { rgba } from "polished"
import styled from "styled-components"

export const TileStyle = styled.div`
    border-radius: 16px;
    background: ${rgba("#100840", 0.1)};
    padding: 20px;
    width: 100%;

    .heading {
        color: #0C0C0C;
        font-size: 14px;
        margin-bottom: 22px;
    }

    .value {
        color: #0C0C0C;
        font-size: 60px;
        font-weight: bold;
        text-align: right;
        line-height: 1.5;
    }
`