import React, {useState} from "react";
import { v4 as uuid } from "uuid";

/** Renders box form displaying width, height, and
 * background color input fields
 *
 *  - State:
 *    - formData -- changes as user changes inputs
 *
 *  - Props:
 *    - addBox function from BoxList
 *
 * */
function NewBoxForm({ addBox }) {
  const initialState = {
    width:"",
    height:"",
    bgColor:""
  }
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value

    setFormData(formData => ({
      ...formData,
      [fieldName]: value,
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox({...formData, id: uuid()})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input name="height" value={formData.height} onChange={handleChange}></input>
      <br/>
      <label htmlFor="width">Width</label>
      <input name="width" value={formData.width} onChange={handleChange}></input>
      <br/>
      <label htmlFor="bgColor">Background Color</label>
      <input name="bgColor" value={formData.bgColor} onChange={handleChange}></input>
      <br/>
      <button>Add a new box!</button>
    </form>
  )
}

export default NewBoxForm;
