import React from "react";

const squareSide = 35;
const circleRadius = 12;
let areas = [...Array(81).keys()].map((i) => {
  let x = parseInt(i / 9) * squareSide + 10;
  let y = i % 9 * squareSide + 10;
  return { x, y, selected: false };
});


const Areas = () => (
  <map name="clikableZones">
    {areas.map((position, i) => {
      let coords = position.x + "," + position.y + "," + circleRadius;
      return <area key={i} shape="circle" coords={coords} onClick={() => {
        console.log("coucou")
      }} />
    })}
  </map>
)

export default Areas;