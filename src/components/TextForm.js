import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState(); 
    const handleUpClick =()=>{
        console.log("Uppercase was clicked");
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
        
    }
    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearText = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="enter text here" onChange={handleOnChange} 
             style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Clear extra spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>



        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>Your text summary</h1>
            <p>{text?.split(/[^\s]+/).length-1} words and {text?.replace(/ /g,"").length} characters</p>
            <p>{0.008*text?.split(/[^\s]+/).length} minutes read</p>
            <p>Preview:</p>
            <p>{text}</p>
        </div>
        </>

  )
}


