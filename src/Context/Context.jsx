import { createContext,useReducer } from "react";

export const Context = createContext()

export function ContextProvider({children}){

     const counterReducer = (state,action)=>{
    if(action.type === "INCREMENTO"){
      return{
        count: state.count + 1
      }
    }else if(action.type === "DECREMENTO"){
      return{
        count: state.count - 1
      }
    }else{
      return{
        count:0
      }
    }
  }

  const [state, dispatch] = useReducer(counterReducer,{count:0})

  return(
    <Context.Provider value={{state,dispatch}}>
        {children}
    </Context.Provider>
  )
}