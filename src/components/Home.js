import React,{useState} from 'react';

function Home(props) {

    const [text,setText] = useState("")

  
   const toUppercase = () =>{
      setText(text.toUpperCase());
     
   }

    
   const toLowercase = () =>{
    setText(text.toLowerCase());
   }
   
    
   const toCopy = () =>{
      navigator.clipboard.writeText(text);
      window.alert("Text Cpied "+text);
 }

 
    
 const toStart = () =>{
    var firstChar = text.charAt(0);
    var newText= firstChar.toUpperCase();
    setText(newText+text.slice(1));
}

  
const toClear = () =>{   
   setText("")

}

    
    const handleInputs = (e) =>{ 
          setText(e.target.value);
        
    }

    return (
        <>
            <div class="container my-3">
                <label for="text" className="form-label">Text Counter</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                 value={text}
                 onChange={handleInputs}
                 style={{background: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}
                 rows="8" placeholder="Enter Text Here..."></textarea>

                <button disabled={text.length===0} className="btn sm btn-primary my-3 mx-2"   onClick={toUppercase}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn sm btn-primary my-3 mx-2"   onClick={toLowercase}>Convert To Lowercase</button>
                <button disabled={text.length===0} className="btn sm btn-primary my-3 mx-2"   onClick={toCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn sm btn-primary my-3 mx-2"   onClick={toStart}>Start With Capital Letter</button>
                <button disabled={text.length===0} className="btn sm btn-primary my-3 mx-2"   onClick={toClear}>Clear</button>
                

                <p className="my-3">Total Length of Text is <strong>{text.length}</strong></p>
                <p className="my-3">Total Words in Text is <strong>{text.split(" ").filter((element) =>{return element.length!==0}).length}</strong></p>

                <h4>Preview</h4>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                style={{background: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}
                 value={text}
                 rows="3">   
                 </textarea>

            </div>
        </>
    )
}

export default Home
