function generatorQR() {
    let text = document.getElementById("qrText").value.trim();

    if (text === "") {
        alert("Pleasr enter some text or URL!");
        return;
    }

    let qrBox = document.getElementById("qrBox");
    qrBox.innerHTML = "";

    QRCode.toCanvas(text, {width:200}, function(err,canvas) {
        if(err) console.error(err);
        qrBox.appendChild(canvas);
    });
}
let text = document.getElementById("qrText")
console.log(text)
// generatorQR()