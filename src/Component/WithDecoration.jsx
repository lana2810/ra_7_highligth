import React from "react";
import Popular from "./Popular";
import New from "./New";

function WithDecoration(Component) {
  return function (props) {
    return props.views > 1000 ? (
      <Popular>
        <Component {...props} />
      </Popular>
    ) : props.views < 100 ? (
      <New>
        <Component {...props} />
      </New>
    ) : (
      <Component {...props} />
    );
  };
}

export default WithDecoration;
