import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode, setQRCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQRCode = () => {
        setQRCode(input);
    }


    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a URL"
                />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQRCode}>Generate QR Code</button>
            </div>
            <div>
                <QRCode
                    id="qr-code"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
    )
}