import { useState } from "react";


export default function TextForm  () {
  const handle = () => {
    console.log("Upper Case Clicked");
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handelonChange = (e) => {
    console.log("On Change")
    setText(e.target.value)


  }


  const [text, setText] = useState()


  return (
    <>
    <h1>Text Form</h1>
    <textarea name="" value={text} onChange={handelonChange} id=""></textarea>
    <button onClick={handle}>Change</button>
    </>
  )
}