import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleDownClick = () => {
        const downText = text.toLowerCase()
        setText(downText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const clear = () => {
        setText("")
        props.showAlert("Text cleared", "danger")
    }

    const handleCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied", "success")
    }

    const handleTrim = () => {
        let text = document.getElementById('exampleFormControlTextarea1').value
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Text is trimmed", "info")
    }

    const handleCamel = () => {
        let text = document.getElementById('exampleFormControlTextarea1').value
        let len = text.split(" ").length
        let words = []
        for (let i = 0; i < len; i++) {
            words.push(text.split(" ")[i])
        }

        let newText = ''
        for (let j = 0; j < len; j++) {
            words[j] = words[j].replace(words[j].charAt(0), words[j].charAt(0).toUpperCase())
            newText+=words[j]+" "
        }
        setText(newText)
        props.showAlert("Converted to CamelCase", "success")

    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="mb-3 container">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={8}
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === "dark" ? "grey" : "white",
                        color: props.mode === "dark" ? "white" : "black"
                    }}
                />
                <button className="btn btn-dark my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={handleUpClick}>Convert to UpperCase
                </button>
                <button className="btn btn-secondary my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={handleDownClick}>Convert To LowerCase
                </button>
                <button className="btn btn-secondary my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={handleCamel}>Convert To CamelCase
                </button>
                <button className="btn btn-primary my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={handleCopy}>Copy
                </button>
                <button className="btn btn-primary my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={handleTrim}>Trim
                </button>
                <button className="btn btn-danger my-3 mx-2" style={{backgroundColor: props.theme.buttonColor}}
                        onClick={clear}>Clear
                </button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <h5 className="my-2">
                    Total Words: <span
                    style={{"color": "green", "font-weight": "bolder"}}>{text.split(" ").length}</span>
                </h5>
                <h5 className="my-2">
                    Total Characters: <span style={{"color": "green", "font-weight": "bolder"}}>{text.length}</span>
                </h5>
                <h5 className="my-2">
                    <span style={{
                        "color": "green",
                        "font-weight": "bolder"
                    }}>{((text.length) * 0.008).toFixed(2)} Minutes</span> To Read
                </h5>
                <br/>
                <h1>Preview</h1>
                <p>{text.length <= 0 ? "Enter something to get the Preview" : text}</p>
            </div>
        </>

    )
}