import React from "react";
import ReactDOM from "react-dom";
import Goban from "./Goban";
import Areas from "./Areas"
import Stones from "./Stones"

const Game = () => (
  <div>
    <Goban />
    <Areas />
    <Stones />
  </div>
)

ReactDOM.render(<Game />, document.getElementById("root"));