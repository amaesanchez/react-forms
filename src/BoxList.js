import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"

/** Renders NewBoxForm and all existing boxes
 *
 *  - Component:
 *    - NewBoxForm
 *    - Box
 *
 *  - State:
 *    - boxes added
 *
 *  BoxList -> NewBoxForm & Box
 */

function BoxList() {
  const [ boxes, setBoxes ] = useState([])

  function addBox(formData) {
    setBoxes(boxes => ([
      ...boxes,
      formData
    ]))
  }

  function removeBox(id) {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {boxes.map(box =>
        <Box
          removeBox={removeBox}
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          bgColor={box.bgColor}/>)}
    </div>
  )
}
// you need both key and id -- you cant access key


export default BoxList;
