import React, { useState } from 'react';
import { base64ToFile, fileToBase64 } from '../utils/converters';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Download04Icon } from 'hugeicons-react';

export const EncodeDecodeFile = () => {
  const [base64, setBase64] = useState('');
  const [filename, setFilename] = useState('download.txt');
  const [base64Disabled, setBase64Disabled] = useState(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleConvert(event?.target?.files[0])
    }
  };

  const handleConvert = (file: File | null) => {
    if (!file) {
      return;
    }
    fileToBase64(file, (result: string) => {
      setBase64(result.split(',')[1]);
    });
  };

  const handleDownload = () => {
    base64ToFile(base64, filename);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Row className="mb-3">
          <Col md={2}>
            <Form.Label htmlFor="fileInput">File</Form.Label>
          </Col>
          <Col md={5}>
            <Form.Control
              id={'fileInput'}
              type="file"
              onChange={handleFileChange} />
          </Col>
        </Row>
      </Row>
      <Row className="mb-3">
        <Col md={2}>
          <Form.Label htmlFor="fileNameInput">Filename</Form.Label>
        </Col>
        <Col md={5}>
          <InputGroup>
            <Form.Control
              id={'fileNameInput'}
              type="text"
              value={filename}
              placeholder="Filename"
              onChange={(e) => setFilename(e.target.value)} />
            <Button
              variant="primary"
              title={'Download'}
              onClick={handleDownload}
            >
              <Download04Icon />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={2}>
          <Form.Label htmlFor="base64Disabled">Hide Base64 Content</Form.Label>
        </Col>
        <Col md={1}>
        <Form.Check
          id={'base64Disabled'}
          type="checkbox"
          checked={base64Disabled}
          onChange={(e) => setBase64Disabled(e.target.checked)}
        />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Label htmlFor="base64TextArea">Base64</Form.Label>
        <Form.Control
          as="textarea"
          id={'base64TextArea'}
          value={base64Disabled ? '' : base64}
          style={{ height: '320px' }}
          onChange={it => setBase64(it.target.value)}
          placeholder={base64Disabled ? 'Hidden' : 'Base64 content'}
          disabled={base64Disabled}
        />
      </Row>
    </Container>
  );
};
