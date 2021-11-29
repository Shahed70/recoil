import { RecoilRoot } from "recoil";
import "./App.css";
import CharacterCounter from "./CharacterCounter";
import Counter from "./Counter";
import Counter1 from "./counter/Index";
import HistoryState from "./history/index";
import Product from "./recoil/Product";


function App() {
  return <div className="App">
    <RecoilRoot>
      <br />
      <h3>Recoil Demo</h3>
      <hr />
      <br />
      {/* <Counter />
      <CharacterCounter />
      <TodoList />

      <Counter1 />
      <br />
      <br />
      <HistoryState /> */}

      <Product />

    </RecoilRoot>
  </div>;
}

export default App;
