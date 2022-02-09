import React, {useState} from "react";
import s from "./Counter.module.css";
import {DisplayDigit} from "./DisplayDigit";
import {Button} from "./Button";

export function Counter() {

  const startValue: number = 0;
  const maxValue: number = 5;

  const [num, setNum] = useState<number>(startValue);

  const onClickIncrement = () => {if (num < maxValue) setNum(num + 1);}
  const onClickReset = () => setNum(startValue);

  const valueColor: string = (num === maxValue) ? s.colored : "";

  return (
    <div className={s.counter}>

      <DisplayDigit valueColor={valueColor} num={num}/>

      <div className={s.buttons}>
        <Button
          onClickCallBack={onClickIncrement}
          disabled={num === maxValue}
          btnName="inc"
        />
        <Button
          onClickCallBack={onClickReset}
          disabled={num === startValue}
          btnName="reset"
        />
      </div>
    </div>
  );
}


