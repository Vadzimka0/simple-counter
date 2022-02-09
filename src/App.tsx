import React, {useState} from 'react';
import {EditValuesMode} from "./components/EditValuesMode";
import {CounterMode} from "./components/CounterMode";
import {useSelector} from "react-redux";
import {AppGlobalType} from "./bll/store";


function App() {

  const startValue = useSelector<AppGlobalType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppGlobalType, number>(state => state.counter.maxValue)
  const [editValuesMode, setEditValuesMode] = useState(true)

  return (
    <div className="wrapper">
      {
        editValuesMode
          ? <EditValuesMode
            startValue={startValue}
            maxValue={maxValue}
            callBackSetMode={setEditValuesMode}
          />
          : <CounterMode
            startValue={startValue}
            maxValue={maxValue}
            callBackSetMode={setEditValuesMode}
            mode={editValuesMode}
          />
      }
    </div>
  )
}

export default App;


