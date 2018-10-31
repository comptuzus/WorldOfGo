import React from "react";
import blackStone from "../../public/ressources/black_stone.svg"

const circleRadius = 12;

const Area = ({ index, position, handleSelectedArea, display }) => {
  const coords = position.x + "," + position.y + "," + circleRadius;
  const x = position.x - 9 + "px";
  const y = position.y - 9 + "px";
  return (
    <div>
      <area shape="circle"
        coords={coords}
        onClick={() => {
          handleSelectedArea(index);
        }}
      />
      {display && <img src={blackStone} style={{ left: x, top: y }} className="stone"></img>}
    </div >
  )
}

export default Area;