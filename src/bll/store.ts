import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

let preloadedState;
const persistedString = localStorage.getItem('app_state')
if (persistedString) {
  preloadedState = JSON.parse(persistedString)
}

const rootReducer = combineReducers({
  counter: counterReducer
})

export type AppGlobalType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, preloadedState);

// @ts-ignore
window.store = store;


store.subscribe(() => {
  localStorage.setItem('app_state', JSON.stringify(store.getState()))
})

