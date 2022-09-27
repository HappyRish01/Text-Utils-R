import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"  + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case" , "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value)
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case" , "success");
};

  const handleClClick = () => {
    const newText = '';
    setText(newText); 
    props.showAlert("Text-Cleared" , "danger  ");

  };
  const handleCopy = () => {
    var text = document.getElementById("myBox1")
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To ClipBoard" , "success");
  };


  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}  </h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'black'}}id="myBox1" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper-case</button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower-case</button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0}className="btn btn-danger mx-1 my-1" onClick={handleClClick}>Clear Text</button>
      </div>

      <div className='container my-3' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p><b>{text.split(" ").filter((element)=>{
          return element.length !==0
        }).length} </b> Characters</p>
        <p>Time to Read this whole Paragraph is <b>{0.008 * text.split(" ").filter((element)=>{
          return element.length !==0
        }).length}</b></p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the text box above to preview something"}</p>
      </div>
    </>
  )
}
