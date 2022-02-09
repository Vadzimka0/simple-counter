import React, {useState} from "react";
import {Button} from "./Button";

type CounterModePropsType = {
  startValue: number
  maxValue: number
  callBackSetMode: (mode: boolean) => void
  mode?: boolean
}

export const CounterMode: React.FC<CounterModePropsType> = ({
  callBackSetMode, startValue, maxValue
}) => {

  const [num, setNum] = useState<number>(startValue);

  const onClickIncrement = () => {
    if (num < maxValue) setNum(num + 1)
  }
  const onClickReset = () => setNum(startValue);
  const onClickGoToEditMode = () => callBackSetMode(true)
  const valueColor: string = `increased ${(num === maxValue) ? "colored" : ""}`;

  return (<>

    <div className="info">
      <div className={valueColor}>{num}</div>
    </div>

    <div className="buttons">
      <Button
        onClickCallBack={onClickIncrement}
        disable={num === maxValue}
        name="inc"
      />
      <Button
        onClickCallBack={onClickReset}
        disable={num === startValue}
        name="reset"
      />
      <Button
        onClickCallBack={onClickGoToEditMode}
        name="set"
      />
    </div>

  </>);
};