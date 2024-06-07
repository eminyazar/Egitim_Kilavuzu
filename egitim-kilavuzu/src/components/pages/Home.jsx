import React from "react";
import LinkTable from "../LinkTable";
import "./Home.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import python_AL_SWEIGART from "./pdfs/python_AL_SWEIGART.pdf";
import KarnoOrnekler from "./pdfs/KarnoOrnekler.pdf"; 
import DiferansiyelDenklemler from "./pdfs/DiferansiyelDenklemler.pdf";


function Home() {
  return (

    <div className="home-container">
      <div className="header">

        <h2>NEÜ SACMF</h2>

        <p>Öğrenciler İçin Eğitim Kılavuzu Uygulaması</p>

      </div>

      <div className="card-section">
      <Row>  
        <Col>
        <Card style={{ width: "100%",height: "100%", margin: "10px" }}>
          <Card.Body>
            <Card.Title>1. Sınıf</Card.Title>
            <Card.Text>1. sınıfın Automate the Boring Stuff with Python PDF'ini indirin.</Card.Text>
            <Button variant="primary" href={python_AL_SWEIGART} download="python_AL_SWEIGART">İndir</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: "100%",height: "100%", margin: "10px" }}>
          <Card.Body>
            <Card.Title>2. Sınıf</Card.Title>
            <Card.Text>2. sınıfın Karno Harita Örnekleri PDF'ini indirin.</Card.Text>
            <Button variant="primary" href={KarnoOrnekler} download="KarnoOrnekler">İndir</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: "100%",height: "100%", margin: "10px" }}>
          <Card.Body>
            <Card.Title>2. Sınıf</Card.Title>
            <Card.Text>2. sınıfın Diferansiyel Denklemler Ders Kitabı PDF'ini indirin.</Card.Text>
            <Button variant="primary" href={DiferansiyelDenklemler} download="DiferansiyelDenklemler">İndir</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: "100%",height: "100%", margin: "10px" }}>
          <Card.Body>
            <Card.Title>3. Sınıf</Card.Title>
            <Card.Text>3. sınıfın Algoritma Analizi ve Tasarımı PDF'ini indirin.</Card.Text>
            <Button variant="primary" href={python_AL_SWEIGART} download="python_AL_SWEIGART">İndir</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: "100%",height: "100%", margin: "10px" }}>
          <Card.Body>
            <Card.Title>4. Sınıf</Card.Title>
            <Card.Text>4. sınıfın Derin Öğrenme ve Evrişimli Sinir Ağları PDF'ini indirin.</Card.Text>
            <Button variant="primary" href={python_AL_SWEIGART} download="python_AL_SWEIGART">İndir</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </div>

      <div className="table-section">

        <LinkTable />

      </div>
    </div>
  );
}

export default Home;
