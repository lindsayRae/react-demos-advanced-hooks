import { useRef, useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  //? The action type determines the specific action of the reducer.
  //? Actions can have any form.
  //? By convention, it's common to pass objects with a type property identifying the action.
  //? You should include the minimal necessary information that the reducer needs to compute the next state.
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 10 };
  if (action.type === 'celebrity_visit') return { money: state.money + 5000 };

  return state;
};

function App() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <div>
        <h1>Example useReducer - super power useState</h1>
        <p>
          Get's initial state and reducer function (the action object). This
          object has multiple type values, and based on each of these types
          values, you can invoke the dispatch function to perform a specific
          operation.
        </p>

        <h2>Wallet: {state.money}</h2>
        <div>
          {/* Instead of using setState like the useState hook, you use the dispatch method of the useReducer hook. This accepts an object literal with a single property called type set to a matching 'action.type' whose behavior is defined inside the reducer function. */}
          <button onClick={() => dispatch({ type: 'buy_ingredients' })}>
            Shopping for veggies!
          </button>
          <button onClick={() => dispatch({ type: 'sell_a_meal' })}>
            Serve a meal to the customer
          </button>
          <button onClick={() => dispatch({ type: 'celebrity_visit' })}>
            Celebrity Visit
          </button>
        </div>
      </div>
      <div>
        <h1>Example useRef</h1>
        <h2>Using useRef to access underlying DOM</h2>
        <p>click the button to focus input</p>
        <input ref={formInputRef} type='text' />
        <button onClick={focusInput}>Focus input</button>
      </div>
    </div>
  );
}

export default App;
