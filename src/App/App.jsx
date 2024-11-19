import { ContextProvider } from "../Context/Context";
import Counter from "../Counter/Counter";

export default function App() {
  return(
    <ContextProvider>
      <Counter/>
    </ContextProvider>
  );
}
