import React from "react";
import Area from "./Area"


const Areas = ({ areas, handleSelectedArea }) => (
  <map name="clikableZones">
    {
      areas.map((position, i) => <Area key={i} index={i} position={position} handleSelectedArea={handleSelectedArea} display={areas[i].selected} />)
    }
  </map>
)

export default Areas;