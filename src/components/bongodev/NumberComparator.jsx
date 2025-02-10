import { useReducer } from 'react';

export const NumberComparator = () => {
  const initialState = {
    firstNumber: 0,
    secondNumber: 0,
  };

  const reducer = (state, action) => {
    if (action.type === 'SET_FIRST_NUMBER') {
      return {
        ...state,
        firstNumber: action.payload,
      };
    } else if (action.type === 'SET_SECOND_NUMBER') {
      return {
        ...state,
        secondNumber: action.payload,
      };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="number"
        value={state.firstNumber}
        onChange={(e) =>
          dispatch({
            type: 'SET_FIRST_NUMBER',
            payload: parseFloat(e.target.value),
          })
        }
      />
      <input
        type="number"
        value={state.secondNumber}
        onChange={(e) =>
          dispatch({
            type: 'SET_SECOND_NUMBER',
            payload: parseFloat(e.target.value),
          })
        }
      />
      <p>
        {state.firstNumber > state.secondNumber
          ? 'First number is greater'
          : state.firstNumber < state.secondNumber
          ? 'Second number is greater'
          : 'Both numbers are equal'}
      </p>
    </div>
  );
};
