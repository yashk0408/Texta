import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState(''); 
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
             style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Clear extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>Your text summary</h1>
            <p>{text?.split(" ").filter((element)=>{return element.length!==0}).length} words and {text?.replace(/ /g,"").length} characters</p>
            <p>{0.008*text?.split(" ").length} minutes read</p>
            <p>Preview:</p>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>

  )
}


