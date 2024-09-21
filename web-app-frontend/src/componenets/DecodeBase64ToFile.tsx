import React, { useState } from 'react';
import { base64ToFile } from '../utils/converters';
import { Download04Icon } from 'hugeicons-react';

export const DecodeBase64ToFile = () => {
  const [inputText, setInputText] = useState('');
  const [filename, setFilename] = useState('download.txt');

  const handleConvert = () => {
    base64ToFile(inputText, filename);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="mb-3">
          <label htmlFor="fileNameInput" className="form-label">Filename</label>
          <input id={'fileNameInput'}
                 className="form-control"
                 type="text"
                 value={filename}
                 placeholder="Filename"
                 onChange={(e) => setFilename(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTextArea" className="form-label">Content</label>
          <textarea id={'inputTextArea'}
                    className="form-control"
                    value={inputText}
                    placeholder="Base64"
                    onChange={(e) => setInputText(e.target.value)} />
        </div>
      </div>
      <div className="row mt-3 text-center">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={handleConvert}>
            <Download04Icon />
          </button>
        </div>
      </div>
    </div>
  );
};

