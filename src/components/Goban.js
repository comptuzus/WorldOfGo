import React from "react";
import goban from "../../public/ressources/goban_9x9.png";

const Goban = () => (
  <div>
    <img src={goban} useMap="#clikableZones" />
  </div>
)

export default Goban;