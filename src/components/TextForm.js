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
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To ClipBoard" , "success");
  };


  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}  </h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper-case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower-case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear Text</button>
      </div>

      <div className='container my-3' style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p><b>{text.length} </b> Characters</p>
        <p>Time to Read this whole Paragraph is <b>{0.008 * text.split(" ").length}</b></p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the text box above to preview something"}</p>
      </div>
    </>
  )
}
