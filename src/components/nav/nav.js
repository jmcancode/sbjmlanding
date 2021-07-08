import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { Link, Router } from "react-router-dom";

import "./nav.css";

export default function TopNav() {
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
              <a
                style={{
                  color: "#c60000",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
                href="https://instagram.com/sbjmfootwear"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="offcanvas-footer">
              <div className="container">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
