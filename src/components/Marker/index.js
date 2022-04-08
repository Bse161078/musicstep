import React from "react";
// import "./Marker.css";
import { MarkerStyle } from "./Marker.style.ts";

export default function Marker({ lat, lng, color, name, id }) {
  // const { color, name, id } = props;
  return (
    <div>
      <MarkerStyle>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: "pointer" }}
          title={name}
        />
      </MarkerStyle>

      <div className="pulse" />
    </div>
  );
}
