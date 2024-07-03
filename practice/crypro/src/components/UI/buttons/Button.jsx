import React from "react";

export default function Button(props) {
  return <button onClick={props.callback}>{props.children}</button>;
}
