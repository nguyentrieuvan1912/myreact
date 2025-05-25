import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row>
        <Col md={3}>
          <h5>About</h5>
          <p>Student name: Nguyễn Triệu Văn</p>
          <p>Student ID: 22719741</p>
        </Col>
        <Col md={3}>
          <h5>Midterm Exam</h5>
          <p>Application Interface Development</p>
          <p>Date: 25/5/2025</p>
        </Col>
        <Col md={3}>
          <h5>Class</h5>
          <p>Class name: </p>
          <p>Class ID: </p>
        </Col>
        <Col md={3}>
          <h5>Contact</h5>
          <p>Email:</p>
          <p>Phone:</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
