import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import python_AL_SWEIGART from "./pdfs/python_AL_SWEIGART.pdf";
// Diğer PDF dosyalarınızı import edin
import Fizik1 from "./pdfs/Fizik1.pdf";
//import mathBook from "./pdfs/mathBook.pdf";

function Class1() {
  return (
    <div style={{ marginTop: '60px' }} className="first-year-container">
      <div className="header">
        <h2>1. Sınıf</h2>
        <p>1. sınıfın eğitim materyalleri.</p>
      </div>

      <div className="card-section">
        <h3>Python Eğitimi</h3>
        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Python Eğitimi</Card.Title>
                <Card.Text>1. sınıfın Automate the Boring Stuff with Python PDF'ini indirin.</Card.Text>
                <Button variant="primary" href={python_AL_SWEIGART} download="python_AL_SWEIGART">İndir</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="card-section">
        <h3>Algoritma ve Programlama</h3>
        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Algoritma Kitabı</Card.Title>
                <Card.Text>1. sınıfın Algoritma ve Programlama PDF'ini indirin.</Card.Text>
                <Button variant="primary" href={Fizik1} download="Fizik1">İndir</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Diğer Algoritma kartları buraya eklenebilir */}
        </Row>
      </div>

      <div className="card-section">
        <h3>Matematik</h3>
        <Row>
          <Col>
            <Card style={{ width: "100%", height: "100%", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Matematik Kitabı</Card.Title>
                <Card.Text>1. sınıfın Matematik PDF'ini indirin.</Card.Text>
                <Button variant="primary" href={Fizik1} download="Fizik1">İndir</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Diğer Matematik kartları buraya eklenebilir */}
        </Row>
      </div>

    </div>
  );
}

export default Class1;
