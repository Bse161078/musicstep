import React from "react"

import { TileStyle } from "./Tile.style";

type TileProps = {
    heading: string;
    value: number | string;
}

const Tile = (props: TileProps) => {
    const { heading, value } = props;

    return (
        <TileStyle>
            <h5 className="heading">{heading}</h5>
            <p className="value">{value}</p>
        </TileStyle>
    )
}

export default Tile;