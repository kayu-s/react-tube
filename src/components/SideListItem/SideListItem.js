import React from "react";
import { Link } from "react-router-dom";
import Style from "./SideListItem.module.scss";
export default function SideListitem(props) {
  const { id, src, title } = props;

  return (
    <Link className={Style.item} to={{ pathname: "watch", search: `v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  );
}
