import { useReducer } from "react";

export function couterReducer(state, action) {
 
    if (action.type === 'INCREMENTO') {
      return {
        count: state.count + 1
      };
    }else if (action.type === 'DECREMENTO'){
      return {
        count: state.count -1
      };
    }else if(action.type === 'RESET'){
      return {
        count:  0
      };
    } 
}


function App() {
  const [state,dispatch] = useReducer(couterReducer, {count:0});
  return (
    <div id="app">
      <h1>Contagem (Final)?</h1>
      <p id="actions">
        <button onClick={() => dispatch ({type: 'INCREMENTO'})}>Incremento</button>
        <button onClick={() => dispatch ({type: 'DECREMENTO'})}>Decremento</button>
        <button onClick={() => dispatch ({type: 'RESET'})}>Reset</button>
      </p>
      <p id="counter">{state.count}</p>
    </div>
  );
}

export default App;