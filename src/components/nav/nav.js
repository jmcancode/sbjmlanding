import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./nav.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { db } from "../../firebase/config";
export default function TopNav() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("subscribers")
      .add({
        name: name,
        email: email,
      })
      .then(() => {
        alert("Thank you for subscribing! We promise not to spam you.");
      })
      .catch((err) => {
        alert(err.message);
      });

    setName("");
    setEmail("");
  };

  return (
    <React.Fragment>
      <nav style={{ padding: "5px", top: "0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <GrFormAdd size={35} style={{ color: "#c60000" }} />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <small id="offcanvasRightLabel"></small>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Row xs={1} md={1} lg={1}>
                <Col>
                  <h5>Early Access</h5>
                </Col>
              </Row>
              <Row xs={1} md={1} lg={1} className="mt-5">
                <Col>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Subscribe for updates</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        placeholder="fullname@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button type="submit" variant="danger">
                        Join
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                className="text-center mt-5"
              >
                <Col>
                  <a
                    href="https://www.instagram.com/sbjmfootwear/"
                    rel="noreferrer noopener"
                    target="__blank"
                  >
                    <FaInstagram size={40} color="#171717" />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.facebook.com/stylebyjmsa"
                    rel="noreferrer noopener"
                    target="__blank"
                  >
                    <FaFacebook size={40} color="#171717" />
                  </a>
                </Col>
              </Row>
            </div>
            <div className="offcanvas-footer">
              <div className="container pb-4">
                <Row>
                  <Col className="text-center">
                    <small className="text-muted">
                      Design & Development by{" "}
                      <a
                        style={{ color: "#c60000" }}
                        href="https://www.jonmichaelnarvaez.com"
                        rel="noreferrer noopener"
                        target="__blank"
                      >
                        JM
                      </a>
                    </small>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
