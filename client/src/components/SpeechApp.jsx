import React,{Component} from "react";
import '../css/QRGenerator.css';


function speak(message, language = 'en-US') {
    const msg = new SpeechSynthesisUtterance(message);
    msg.lang = language;
    speechSynthesis.speak(msg);
    
}

export default class SpeechApp extends Component{
    componentDidMount() {
        const speechBtn = document.querySelector(".form button"),
        speechInput = document.querySelector(".form textarea");
        speechBtn.addEventListener("click", () =>{
            speak(speechInput.value);
        })
        
        // speechBtn.removeEventListener("click", () =>{
        //     speak(speechInput.value);
        // },true)
    }
    
    render(){
        return (
            <div className="container">
                <div className="body">
                    <div className="wrapper" id="wrapper">
                        <div className="form">
                            <textarea id="" className="" rows="3" cols="20" placeholder='Escribe tu texto'></textarea>
                            {/* <input type="text" className="" placeholder='Escribe tu texto'/> */}
                            <button className="speech-btn">Speech</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
