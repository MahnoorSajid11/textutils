import React , {useState} from 'react'
import './text.css'
export default function TextForm(props) {
    const handleupclick = ()=>{
    //  console.log("Uppercase click" + text);
     let newText = text.toUpperCase();
     setText(newText);
    }
    const handleLOclick = ()=>{
      //  console.log("Uppercase click" + text);
       let newText = text.toLowerCase();
       setText(newText);
      }
      const handleClearTextclick = ()=>{
        //  console.log("Uppercase click" + text);
         let newText = '';
         setText(newText);
        }
        const handleCapitalizeclick = ()=>{
          //  console.log("Uppercase click" + text);
           let newText = text.split(" ");
           for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
           let newText1 = newText.join(" ");
           setText(newText1);
          }
    const handleonchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
       }
    const [text, setText] = useState("");
    // text = "new Text"; // Wrong way to change the state
    // setText = ("new Text"); // Wrong way to change the state
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value = {text} onChange = {handleonchange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick = {handleupclick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick = {handleLOclick}>Convert To LowerCase</button>
  <button className="btn btn-primary mx-2" onClick = {handleClearTextclick}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick = {handleCapitalizeclick}>Capitalize Word</button>
  </div>
   <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length}Words and {text.length}Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
  </>
  )
}
