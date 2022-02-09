import React from "react";

type ButtonProps = {
  onClickCallBack: () => void
  disabled: boolean
  btnName: string
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClickCallBack}
      disabled={props.disabled}
    >
      {props.btnName}
    </button>
  );
}
