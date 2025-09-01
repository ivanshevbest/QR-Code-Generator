document.getElementById('generate-btn').addEventListener('click', function() {
    const data = document.getElementById('data').value;
    const qrCodeDiv = document.getElementById('qr-code');

    if (data) {
        qrCodeDiv.innerHTML = '';
        new QRCode(qrCodeDiv, {
            text: data,
            width: 200,
            height: 200,
            colorDark: "#000",
            colorLight: "#fff"
        });
    } else {
        alert('Пожалуйста, введите данные для QR-кода ( можно ввести номер телефона,e-mail,url сайта и т.д.).');
    }
});
