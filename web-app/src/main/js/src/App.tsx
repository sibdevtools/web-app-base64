import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hugeicons-react'
import { DecodeBase64ToFile, DecodeBase64ToText, EncodeFileToBase64, EncodeTextToBase64 } from './componenets';

const App: React.FC = () => {
  const [mode, setMode] = useState('textToBase64');
  const [encoding, setEncoding] = useState('UTF-8');

  const renderModeComponent = () => {
    switch (mode) {
      case 'textToBase64':
        return <EncodeTextToBase64 encoding={encoding} />;
      case 'base64ToText':
        return <DecodeBase64ToText encoding={encoding} />;
      case 'fileToBase64':
        return <EncodeFileToBase64 />;
      case 'base64ToFile':
        return <DecodeBase64ToFile />;
      default:
        return <div>Please select a mode</div>;
    }
  };

  return (
    <div className="container mt-5">
      <label htmlFor="modeSelect">Mode Theme:</label>
      <select
        id="modeSelect"
        className="form-control form-select"
        value={mode} onChange={e => setMode(e.target.value)}>
        <option value="textToBase64">Text to Base64 Text</option>
        <option value="base64ToText">Base64 Text to Text</option>
        <option value="fileToBase64">File to Base64 Text</option>
        <option value="base64ToFile">Base64 Text to File</option>
      </select>
      {renderModeComponent()}
    </div>
  );
};

export default App;
