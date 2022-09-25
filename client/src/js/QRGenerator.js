const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img"),
qrDownload = wrapper.querySelector(".qr-code a");
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

function download() {
    axios({
          url: source,
          method: 'GET',
          responseType: 'blob'
    })
          .then((response) => {
                const url = window.URL
                      .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'qr.png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
          })
}
