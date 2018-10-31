import React from "react";
import ReactDOM from "react-dom";
import Goban from "./components/Goban";
import Areas from "./components/Areas"
import Stones from "./components/Stones"

const Game = () => (
  <div>
    <Goban />
    <Areas />
    <Stones />
  </div>
)

ReactDOM.render(<Game />, document.getElementById("root"));