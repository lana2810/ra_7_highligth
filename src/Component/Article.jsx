/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
}

export default Article;