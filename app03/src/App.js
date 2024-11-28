import CounterCC from "./CounterCC";
import CounterFC from "./CounterFC";

const App =() => (
  <div className="container-fluid p-4">
    <h3>React Component Life cycle Methods and Hooks Demo</h3>

    <div className="row">
      <div className="col">
        <CounterCC />
      </div>
      <div className="col">
        <CounterFC />
      </div>
    </div>
  </div>
);

export default App;
