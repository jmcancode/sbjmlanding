import React from "react";
import { Row, Col } from "react-bootstrap";

import jmLanding from "../assets/jm-transp.jpg";

export default function MainPage() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Row xs={1} md={1} lg={1}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={jmLanding}
              alt="logo"
              width={100}
              height={100}
              style={{ height: "150px", width: "150px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontFamily: "Damion" }} className="text-center">
              Coming <br /> September '21
            </h2>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col></Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
