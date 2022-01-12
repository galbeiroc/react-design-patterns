import { DangerButton, BigSuccessButton } from "./components/Composition";
import { RecursiveComponent } from "./components/RecursiveComponent";
import { nestedObject } from "./nestedObject";

function App() {
  return (
    <div className="App">
      <h3>Functional Programming</h3>
      {/* <RecursiveComponent data={nestedObject} /> */}
      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Yes!!!" />
    </div>
  );
}

export default App;
