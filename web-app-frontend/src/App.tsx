import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'hugeicons-react'
import { EncodeDecodeFile, EncodeDecodeText } from './componenets';
import { Col, Container, FormLabel, FormSelect, Row } from 'react-bootstrap';

type Mode = 'text' | 'file';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('text');

  const renderModeComponent = () => {
    switch (mode) {
      case 'text':
        return <EncodeDecodeText />;
      case 'file':
        return <EncodeDecodeFile />;
      default:
        return <div>Please select a mode</div>;
    }
  };

  return (
    <Container className="mt-5">
      <p className={'h2 mb-4'}>Base64 Encoder/Decoder</p>
      <Row>
        <Col md={2}>
          <FormLabel htmlFor="modeSelect">Mode</FormLabel>
        </Col>
        <Col md={5}>
          <FormSelect
            id="modeSelect"
            value={mode}
            onChange={e => setMode(e.target.value as Mode)}>
            <option value="text">Text Converter</option>
            <option value="file">File Converter</option>
          </FormSelect>
        </Col>
      </Row>
      {renderModeComponent()}
    </Container>
  );
};

export default App;
