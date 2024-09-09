import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const [encodedText, setEncodedText] = useState<string>('');
    const [decodedText, setDecodedText] = useState<string>('');

    const encodeText = () => {
        try {
            const encoded = encodeURIComponent(decodedText)
                .replace(/%([0-9A-F]{2})/g,
                    function toSolidBytes(match, p1) {
                        return String.fromCharCode(Number('0x' + p1));
                    })
            const b64 = btoa(encoded)
            setEncodedText(b64);
        } catch (e) {
            alert('Invalid characters for encoding');
        }
    };

    const decodeText = () => {
        try {
            const source = atob(encodedText)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16))
                        .slice(-2);
                })
                .join('');
            setDecodedText(
                decodeURIComponent(source)
            );
        } catch (e) {
            alert('Invalid Base64 string');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
          <textarea
              className="form-control"
              rows={10}
              placeholder="Encoded Text"
              value={encodedText}
              onChange={(e) => setEncodedText(e.target.value)}
          />
                </div>
                <div className="col-6">
          <textarea
              className="form-control"
              rows={10}
              placeholder="Decoded Text"
              value={decodedText}
              onChange={(e) => setDecodedText(e.target.value)}
          />
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col">
                    <button className="btn btn-primary mx-2" onClick={decodeText}>
                        Decode
                    </button>
                    <button className="btn btn-secondary mx-2" onClick={encodeText}>
                        Encode
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
