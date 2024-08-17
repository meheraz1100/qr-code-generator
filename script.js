document.getElementById('generate-btn').addEventListener('click', function() {
  let text = document.getElementById('text-input').value;
  let qrCodeDiv = document.getElementById('qr-code');
  let downloadBtn = document.getElementById('download-btn');

  // Clear any previous QR code
  qrCodeDiv.innerHTML = "";
  downloadBtn.style.display = "none"; // Hide download button initially

  if (text.trim() !== "") {
      // Create a canvas element
      let canvas = document.createElement('canvas');
      qrCodeDiv.appendChild(canvas);

      // Generate the QR code on the canvas
      QRCode.toCanvas(canvas, text, { width: 200, height: 200 }, function(error) {
          if (error) console.error(error);
      });

      // Show the download button and set up its functionality
      downloadBtn.style.display = "inline-block";
      downloadBtn.addEventListener('click', function() {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'qrcode_printed_by_meheraz.png';
          link.click();
      });
  } else {
      alert("Please enter some text.");
  }
});

