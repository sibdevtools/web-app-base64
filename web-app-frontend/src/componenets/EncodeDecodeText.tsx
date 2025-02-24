import React, { useState } from 'react';
import { decodeBase64ToText, encodeTextToBase64 } from '../utils/converters';
import { Col, Container, FormLabel, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';

export const EncodeDecodeText: React.FC = () => {
  const [base64Input, setBase64Input] = useState('');
  const [base64Error, setBase64Error] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [textError, setTextError] = useState<string | null>(null);

  const handleDecode = (base64: string) => {
    if (base64 === base64Input) {
      return;
    }
    setTextError(null)
    setBase64Error(null)
    setBase64Input(base64)
    try {
      const result = decodeBase64ToText(base64);
      setTextInput(result);
    } catch (e) {
      setBase64Error('Invalid Base64 data: ' + e);
    }
  };

  const handleEncode = (text: string) => {
    if (text === textInput) {
      return;
    }
    setTextError(null)
    setBase64Error(null)
    setTextInput(text)
    try {
      const result = encodeTextToBase64(text);
      setBase64Input(result);
    } catch (e) {
      setBase64Input('Invalid text data');
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={12} lg={6}>
          <FormLabel htmlFor="plainTextArea">Plain text</FormLabel>
          <textarea id={'plainTextArea'}
                    className={`form-control ${textError ? 'is-invalid' : ''}`}
                    value={textInput}
                    style={{ height: '320px' }}
                    placeholder="Plain text"
                    onChange={(e) => handleEncode(e.target.value)}
          />
          <Feedback id={`plainTextAreaFeedback`} type={'invalid'}>
            {textError}
          </Feedback>
        </Col>
        <Col md={12} lg={6}>
          <FormLabel htmlFor="base64TextArea">Base64</FormLabel>
          <textarea id={'base64TextArea'}
                    className={`form-control ${base64Error ? 'is-invalid' : ''}`}
                    value={base64Input}
                    style={{ height: '320px' }}
                    onChange={(e) => handleDecode(e.target.value)}
                    placeholder="Base64"
          />
          <Feedback id={`base64TextAreaFeedback`} type={'invalid'}>
            {base64Error}
          </Feedback>
        </Col>
      </Row>
    </Container>
  );
};
