import React,{useState} from 'react'

export default function TextForm(props) {
 
    const[text,settext] = useState('')  // Creating a state 

    const changeColor = (mycolour) => {
        if (mycolour === 'light')
            return 'white';
        else if (mycolour === 'dark')
            return '#222537';
        else if (mycolour === 'red')
            return 'rgb(190 20 20)';
        else if (mycolour === 'blue')
            return '#0066cc';
    }


    const handleonChange = (event)=>{
        // console.log("On change invoked")
        settext(event.target.value)
        var ele = document.getElementById("copytext")
        ele.innerHTML = "Copy Text"
        ele.disabled = false;
    }

    const handleonUpper = ()=>{
        // console.log("Button was clicked")
        // console.log(text)
        let newText = text.toUpperCase()
        settext(newText)
        props.showalert("success","Text has been converted to Uppercase")
        // settext("You have clicked on button")
    }

    const handleonLower = ()=>{
        // console.log(text)
        let newtext = text.toLowerCase();
        settext(newtext)
    }

    const handleonVowels = ()=>{
        let count = 0;
        let arr = ['a','e','i','o','u','A','E','I','O','U']
        for (var i = 0; i < text.length; i++) {
            if(arr.includes(text[i]))
            {
                count += 1;
            }
          }
        alert("Total number of vowels in text is : "+count)
    }

    const handleonClear = ()=>{
        settext("");
    }

    const handleonCopy = ()=>{
        navigator.clipboard.writeText(text);
        var ele = document.getElementById("copytext")
        ele.innerHTML = "Copied"
        ele.disabled = true;
    }

    return (
        <div className={`container my-3 text-${props.mode === "light"?"dark":"light"}`}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className={"form-control mt-10"} style={{backgroundColor : `${changeColor(props.mode)}`,color:`${props.mode === 'light'?'black':'white'}`}} value={text} onChange={handleonChange} id="area" rows="8"></textarea>
            </div>
            <div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleonUpper}>Convert to Upercase</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleonLower}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-1" onClick={handleonVowels}>Count Vowels</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleonClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary" id="copytext" onClick={handleonCopy}>Copy Text</button>
            </div>
            <div className={`container my-3 text-${props.mode === "light"?"dark":"light"}`}>
                <h2>Your Text Summary</h2>
                <div className='mx-2 my-1'>No. of words in your text : {text.split(/\s+/).filter((element)=>{return element!==""}).length}</div>
                <div className='mx-2'>No. of characters in your text : {text.split("").length}</div>
            </div>
        </div>
    )
}
