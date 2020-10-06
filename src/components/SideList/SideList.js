import React, { useContext } from "react";
import { Store } from "../../store";
import SideListItem from "../SideListItem/SideListItem";
import Style from "./SideList.module.scss";

export default function SideList() {
  const { globalState } = useContext(Store);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              title={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          );
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
}
