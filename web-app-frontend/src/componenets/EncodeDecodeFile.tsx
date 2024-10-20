import React, { useState } from 'react';
import { base64ToFile, fileToBase64 } from '../utils/converters';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import { Download04Icon } from 'hugeicons-react';

export const EncodeDecodeFile = () => {
  const [base64, setBase64] = useState('');
  const [filename, setFilename] = useState('download.txt');

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
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <div className="mb-3">
            <FormLabel htmlFor="fileNameInput">File</FormLabel>
            <FormControl
              id={'fileNameInput'}
              type="file"
              onChange={handleFileChange} />
          </div>
          <div className="mb-3">
            <FormLabel htmlFor="fileNameInput">Filename</FormLabel>
            <InputGroup>
              <FormControl
                id={'fileNameInput'}
                type="text"
                value={filename}
                placeholder="Filename"
                onChange={(e) => setFilename(e.target.value)} />
              <Button
                variant="primary"
                onClick={handleDownload}>
                <Download04Icon />
              </Button>
            </InputGroup>
          </div>
        </Col>
        <Col md={8}>
          <FormLabel htmlFor="base64TextArea">Base64</FormLabel>
          <textarea
            id={'base64TextArea'}
            className="form-control"
            value={base64}
            style={{ height: '320px' }}
            onChange={it => setBase64(it.target.value)}
            placeholder="Base64" />
        </Col>
      </Row>
    </Container>
  );
};
