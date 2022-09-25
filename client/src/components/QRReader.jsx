import React,{Component} from "react";
import '../css/QRReader.css';
// import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid'

export default class QRGenerator extends Component{
    componentDidMount() {
        const wrapper = document.querySelector(".wrapper"),
        form = document.querySelector("form"),
        fileInp = form.querySelector("input"),
        infoText = form.querySelector("p"),
        closeBtn = document.querySelector(".close"),
        copyBtn = document.querySelector(".copy");
        function fetchRequest(file, formData) {
            infoText.innerText = "Scanning QR Code...";
            fetch("http://api.qrserver.com/v1/read-qr-code/", {
                method: 'POST', body: formData
            }).then(res => res.json()).then(result => {
                result = result[0].symbol[0].data;
                infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
                if(!result) return;
                document.querySelector("textarea").innerText = result;
                form.querySelector("img").src = URL.createObjectURL(file);
                wrapper.classList.add("active");
            }).catch(() => {
                infoText.innerText = "Couldn't scan QR Code";
            });
        }
        fileInp.addEventListener("change", async e => {
            let file = e.target.files[0];
            if(!file) return;
            let formData = new FormData();
            formData.append('file', file);
            fetchRequest(file, formData);
        });
        copyBtn.addEventListener("click", () => {
            let text = document.querySelector("textarea").textContent;
            navigator.clipboard.writeText(text);
        });
        form.addEventListener("click", () => fileInp.click());
        closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));
    }
    render() {
        return(
            <div className="container">
                <div className="body">
                    <div className="wrapper">
                        <form action="#">
                            <input type="file" hidden/>
                            <img src="#" alt="qr-code"/>
                            <div className="content">
                                <FontAwesomeIcon className="fa-solid icon" icon={faCloudUploadAlt}/>
                                <p>Click to Upload QR Code to Read</p>
                            </div>
                        </form>
                        <div className="details">
                            <textarea spellCheck="false" disabled></textarea>
                            <div className="buttons">
                                <button className="close">Close</button>
                                <button className="copy">Copy Text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            
        )                
    }
}