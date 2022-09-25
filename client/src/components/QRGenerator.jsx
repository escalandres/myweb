import React,{Component, useRef, useEffect} from "react";
import axios from "axios";
import '../css/QRGenerator.css';
import fileDownload from 'js-file-download'

export default class QRGenerator extends Component{
    componentDidMount() {
        const wrapper = document.querySelector(".wrapper"),
        qrInput = wrapper.querySelector(".form input"),
        generateBtn = wrapper.querySelector(".form button"),
        qrImg = wrapper.querySelector(".qr-code img"),
        qrDownload = wrapper.querySelector(".qr-code a");
        const downloadBtn = document.querySelector("#download__btn")
        let preValue;
        var source;
        generateBtn.addEventListener("click", () => {
            let qrValue = qrInput.value.trim();
            if(!qrValue || preValue === qrValue) return;
            preValue = qrValue;
            generateBtn.innerText = "Generating QR Code...";
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
            source = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
            // qrDownload.download = true;
            // qrDownload.target = '_blank';
            // qrDownload.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
            

            qrImg.addEventListener("load", () => {
                wrapper.classList.add("active");
                generateBtn.innerText = "Generate QR Code";
            });
        });
        qrInput.addEventListener("keyup", () => {
            if(!qrInput.value.trim()) {
                wrapper.classList.remove("active");
                preValue = "";
            }
        });
        downloadBtn.addEventListener("click", () => {
            // axios.get({
            //     url: source,
            //     method: 'GET',
            //     responseType: 'blob'
            // })
            //     .then((response) => {
            //             const url = window.URL
            //                 .createObjectURL(new Blob([response.data]));
            //             const link = document.createElement('a');
            //             link.href = url;
            //             link.setAttribute('download', 'qr.png');
            //             document.body.appendChild(link);
            //             link.click();
            //             document.body.removeChild(link);
            //     })
            const url = source;

            const filename = 'qr.png';
            axios.get(url, {
                responseType: 'blob',
            })
            .then((res) => {
                fileDownload(res.data, filename)
            })
        });
    }
    render() {
        return(
            <div className="container">
                <div className="body">
                    <div className="wrapper" id="wrapper">
                        <header>
                            <h1>QR Code Generator</h1>
                            <p>Paste a url or enter text to create QR code</p>
                            <a href="./QRReader"></a>
                        </header>
                        <div className="form">
                            <input id="form__input" type="text" spellCheck="false" placeholder="Enter text or url" />
                            <button id="form__btn">Generate QR Code</button>
                        </div>
                        <div className="qr-code">
                            <img id="qr-code__input" src="" alt="qr-code"/>
                            <button id="download__btn">Download QR Code</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )                
    }
}