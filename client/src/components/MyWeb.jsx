import React,{Component} from "react";

function speak(message, language = 'en-US') {
    const msg = new SpeechSynthesisUtterance(message);
    msg.lang = language;
    speechSynthesis.speak(msg);
    }
    
    // speak('May the Force be with you');
    // speak('Ciao, io sono Daniele', 'it-IT');

export default class MyWeb extends Component{
    componentDidMount() {
        const speechBtn = document.querySelector("main button"),
        speechInput = document.querySelector("main input");
        speechBtn.addEventListener("click", () =>{
            speak(speechInput.value);
        })
    }
    render(){
        return(
            <div>
                <header className="App-header">
                    
                </header>
                <nav>
                
                </nav>
                <main>
                    
                </main>
            </div>
        )

        
    }
    
    
}
