
/** Renders box given custom width, height, and background color
 *
 *  - Props:
 *    - removeBox from BoxList
 *    - id -- uuid
 *    - width
 *    - height
 *    - bgColor
*/

function Box({ removeBox, id, width, height, bgColor }) {
  const boxStyle = {
    backgroundColor: bgColor,
    width: `${width}px`,
    height: `${height}px`
  }

  return (
    <div
      style={boxStyle}>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
