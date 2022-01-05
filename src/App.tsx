// <reference path="path/types.d.ts" />
import FaSun from "./assests/images/FaSun.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <h3>react-typescript boilerplate!</h3>
      <h5>testing lint stage!!</h5>

      <img src={FaSun} alt="FaSun" />
    </div>
  );
};

export default App;
