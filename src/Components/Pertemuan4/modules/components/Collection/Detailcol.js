import React from "react";
import koleksi from "../../../assets/koleksi.png";
import { Link } from "react-router-dom";

export default function Detailcol() {
  return (
    <div
      style={{
        width: "90%",
        height: "1100px",
        backgroundColor: "#5F636D",
        marginLeft: "5%",
        padding: "30px",
      }}
    >
      <div
        class="card mb-3"
        style={{
          maxWidth: "90%",
          marginLeft: "4.5%",
          height: "50%",
          marginTop: "50px",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={koleksi} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
