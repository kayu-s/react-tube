import React from "react";
import Style from "./VideoGrid.module.scss";
export default function Videogrid({ children }) {
  return <div className={Style.container}>{children}</div>;
}
