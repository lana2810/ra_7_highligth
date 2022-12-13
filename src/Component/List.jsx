/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import React from "react";
import Video from "./Video";
import Article from "./Article";
import WithDecoration from "./WithDecoration";

function List(props) {
  return props.list.map((item) => {
    const VideoWithDecoration = WithDecoration(Video);
    const ArticleWithDecoration = WithDecoration(Article);
    switch (item.type) {
      case "video":
        return <VideoWithDecoration key={item.id} {...item} />;

      case "article":
        return <ArticleWithDecoration key={item.id} {...item} />;
    }
  });
}

export default List;
