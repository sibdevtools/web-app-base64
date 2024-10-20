import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hugeicons-react'
import { EncodeDecodeText, EncodeDecodeFile } from './componenets';
import { Container, FormLabel, FormSelect } from 'react-bootstrap';

const App: React.FC = () => {
  const [mode, setMode] = useState('text');
  const [encoding, setEncoding] = useState('UTF-8');

  const renderModeComponent = () => {
    switch (mode) {
      case 'text':
        return <EncodeDecodeText encoding={encoding} />;
      case 'file':
        return <EncodeDecodeFile />;
      default:
        return <div>Please select a mode</div>;
    }
  };

  return (
    <Container className="mt-5">
      <p className={'h2 mb-4'}>Base64 Encoder/Decoder</p>
      <FormLabel htmlFor="modeSelect">Mode:</FormLabel>
      <FormSelect
        id="modeSelect"
        value={mode} onChange={e => setMode(e.target.value)}>
        <option value="text">Text Converter</option>
        <option value="file">File Converter</option>
      </FormSelect>
      {renderModeComponent()}
    </Container>
  );
};

export default App;
