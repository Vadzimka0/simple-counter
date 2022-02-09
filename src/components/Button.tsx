import React from "react";

type ButtonPropsType = {
  onClickCallBack: () => void,
  disable?: boolean,
  name: string
}

export function Button(props: ButtonPropsType) {
  return (
    <button onClick={props.onClickCallBack} disabled={props.disable}>
      {props.name}
    </button>
  );
}