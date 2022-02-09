import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {ChangeMaxValueAC, ChangeStartValueAC, ReducersType} from "../bll/counterReducer";

type EditModePropsType = {
  startValue: number
  maxValue: number
  callBackSetMode: (mode: boolean) => void
}

export const EditValuesMode: React.FC<EditModePropsType> = ({
  startValue, maxValue, callBackSetMode
}) => {

  const dispatch = useDispatch<Dispatch<ReducersType>>()

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = e.currentTarget.valueAsNumber
    if (newMaxValue < startValue) return;
    dispatch(ChangeMaxValueAC(newMaxValue))
  }
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = e.currentTarget.valueAsNumber
    if ((newStartValue > maxValue)) return;
    dispatch(ChangeStartValueAC(newStartValue))
  }
  const onClickGoToCounterMode = () => callBackSetMode(false)
  const matching = startValue === maxValue
  const maxValueBorderColor: string = matching || (maxValue <= 0) ? "bordered" : "";
  const startValueBorderColor: string = matching || (startValue < 0) ? "bordered" : "";

  return (<>

    <div className="info">
      <div className="row">
        <span>max value:</span>
        <input type="number"
               value={maxValue}
               onChange={onChangeMaxValue}
               className={maxValueBorderColor}
        />
      </div>
      <div className="row">
        <span>start value:</span>
        <input type="number"
               value={startValue}
               onChange={onChangeStartValue}
               className={startValueBorderColor}
        />
      </div>
    </div>

    <div className="buttons">
      <Button
        onClickCallBack={onClickGoToCounterMode}
        disable={matching || (startValue < 0)}
        name="set"
      />
    </div>

  </>);
};

