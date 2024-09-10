import React, {useState} from 'react';
import {encodeTextToBase64} from '../utils/converters';
import {ArrowRight05Icon} from 'hugeicons-react';

export const EncodeTextToBase64 = ({encoding}: { encoding: string }) => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleConvert = () => {
        const result = encodeTextToBase64(inputText, encoding);
        setOutputText(result);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <label htmlFor="plainTextArea" className="form-label">Plain text</label>
                    <textarea id={"plainTextArea"}
                              className="form-control"
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              placeholder="Plain text"/>
                </div>
                <div className="col-6">
                    <label htmlFor="base64TextArea" className="form-label">Base64</label>
                    <textarea id={"base64TextArea"}
                              className="form-control"
                              value={outputText}
                              readOnly
                              placeholder="Base64"/>
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

