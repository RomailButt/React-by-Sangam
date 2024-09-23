import React, { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStyle: false,
};
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case "HIDE_TEXT":
      return {
        ...state,
        showTextFlag: false,
      };
    case "SHOW_TEXT":
      return {
        ...state,
        showTextFlag: true,
      };
    case "CHANGE_TEXT_STYLE":
        return {
            ...state,
            changeTextStyle: !state.changeTextStyle,
          };
    default:
      return state;
  }
}
const ReduceComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
    {
        state.showTextFlag ? <h1 style={{color: state.changeTextStyle? 'green' : 'red'}}>Example of useReducer Hook</h1> : null
    }
      
      <button
        onClick={() => {
          dispatch({ type: HIDE_TEXT });
        }}
      >
        Hide text
      </button>
      <button onClick={() => {
          dispatch({ type: SHOW_TEXT });
        }}>Show text</button>
      <button onClick={() => {
          dispatch({ type: CHANGE_TEXT_STYLE });
        }}>Toggle Change text</button>
    </>
  );
};

export default ReduceComponent;
