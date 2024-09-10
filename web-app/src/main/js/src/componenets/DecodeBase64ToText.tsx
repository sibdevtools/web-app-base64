import React, {useState} from 'react';
import {decodeBase64ToText} from '../utils/converters';
import {ArrowRight05Icon} from 'hugeicons-react';

const DecodeBase64ToText = ({encoding}: { encoding: string }) => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleConvert = () => {
        try {
            const result = decodeBase64ToText(inputText, encoding);
            setOutputText(result);
        } catch (e) {
            setOutputText('Invalid Base64 data');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <label htmlFor="base64TextArea" className="form-label">Base64</label>
                    <textarea id={"base64TextArea"}
                              className="form-control"
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              placeholder="Base64"
                    />
                </div>
                <div className="col-6">
                    <label htmlFor="plainTextArea" className="form-label">Plain text</label>
                    <textarea id={"plainTextArea"}
                              className="form-control"
                              value={outputText}
                              placeholder="Plain text"
                              readOnly/>
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col">
                    <button
                        className="btn btn-primary"
                        onClick={handleConvert}>
                        <ArrowRight05Icon/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DecodeBase64ToText;
