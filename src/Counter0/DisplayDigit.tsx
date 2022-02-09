import React from "react";

type DisplayDigitProps = {
  valueColor: string
  num: number
}

export function DisplayDigit(props: DisplayDigitProps) {
  return <div className={props.valueColor}>{props.num}</div>;
}