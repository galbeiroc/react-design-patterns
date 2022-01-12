import { RecursiveComponent } from "./components/RecursiveComponent";
import { nestedObject } from "./nestedObject";

function App() {
  return (
    <div className="App">
      <h3>Functional Programming</h3>
      <RecursiveComponent data={nestedObject} />
    </div>
  );
}

export default App;
