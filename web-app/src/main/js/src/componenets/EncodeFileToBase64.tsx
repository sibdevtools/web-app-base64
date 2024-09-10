import React, {useState} from 'react';
import {fileToBase64} from '../utils/converters';
import {ArrowRight05Icon} from "hugeicons-react";

const EncodeFileToBase64 = () => {
    const [file, setFile] = useState<File | null>(null);
    const [base64, setBase64] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleConvert = () => {
        if (file) {
            fileToBase64(file, (result: string) => {
                setBase64(result.split(',')[1]);  // Strip out the content type part
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <label htmlFor="fileNameInput" className="form-label">Filename</label>
                    <input id={"fileNameInput"}
                           className="form-control"
                           type="file"
                           onChange={handleFileChange}/>
                </div>
                <div className="col-8">
                    <label htmlFor="base64TextArea" className="form-label">Base64</label>
                    <textarea id={"base64TextArea"}
                              className="form-control"
                              value={base64}
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

export default EncodeFileToBase64;
