document.getElementById("generate-btn").addEventListener("click", function () {
  let text = document.getElementById("text-input").value;
  let qrCodeDiv = document.getElementById("qr-code");

  // Clear any previous QR code
  qrCodeDiv.innerHTML = "";

  if (text.trim() !== "") {
    // Create a canvas element
    let canvas = document.createElement("canvas");
    qrCodeDiv.appendChild(canvas);

    // Generate the QR code on the canvas
    QRCode.toCanvas(
      canvas,
      text,
      { width: 200, height: 200 },
      function (error) {
        if (error) console.error(error);
      }
    );
  } else {
    alert("Please enter some text.");
  }
});
