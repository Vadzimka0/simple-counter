
let initState = {
  startValue: 2,
  maxValue: 5
};

export const counterReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case 'CHANGE_START_VALUE':
      return {
        ...state,
        startValue: action.startValue
      }
    case 'CHANGE_MAX_VALUE':
      return {
        ...state,
        maxValue: action.maxValue
      }
    default:
      return state;
  }
};

export type ChangeStartValueType = { type: 'CHANGE_START_VALUE', startValue: number }
export const ChangeStartValueAC = (startValue: number): ChangeStartValueType => {
  return {type: 'CHANGE_START_VALUE', startValue}
}

export type ChangeMaxValueType = { type: 'CHANGE_MAX_VALUE', maxValue: number }
export const ChangeMaxValueAC = (maxValue: number): ChangeMaxValueType => {
  return {type: 'CHANGE_MAX_VALUE', maxValue}
}
export type ReducersType = ChangeStartValueType | ChangeMaxValueType