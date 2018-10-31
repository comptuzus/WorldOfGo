import React, { Component } from "react";
import ReactDOM from "react-dom";
import Goban from "./components/Goban";
import Areas from "./components/Areas";
import Stones from "./components/Stones";
import "./styles/styles.scss";

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleSelectedArea = this.handleSelectedArea.bind(this);
    const squareSide = 35;
    const areas = [...Array(81).keys()].map((i) => {
      let x = parseInt(i / 9) * squareSide + 10;
      let y = i % 9 * squareSide + 10;
      return { x, y, selected: false };
    });

    this.state = { areas }
  }

  handleSelectedArea(areaIndex) {
    this.setState((prevState) => {
      prevState.areas[areaIndex].selected = !prevState.areas[areaIndex].selected;
      return { areas: prevState.areas };
    })
  }

  render() {

    console.log(this.state)
    return (
      <div>
        <Goban />
        <Areas areas={this.state.areas} handleSelectedArea={this.handleSelectedArea} />
        {/* <Stones areas={this.state.areas} /> */}
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));