import React, { Component } from "react";
import koleksi from "../../../assets/koleksi.png";
import { Link } from "react-router-dom";

export default class Collection extends Component {
  render() {
    return (
      <div
        style={{
          width: "90%",
          height: "1100px",
          backgroundColor: "#5F636D",
          marginLeft: "5%",
          padding: "20px",
        }}
      >
        <div
          class="row row-cols-1 row-cols-md-3 g-4 m-4"
          style={{ marginTop: "30px" }}
        >
          <Link to={"/detailcol"}>
            <div class="col">
              <div class="card">
                <img src={koleksi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div class="col">
            <div class="card">
              <img src={koleksi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={koleksi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="row row-cols-1 row-cols-md-3 g-4 m-4"
          style={{ marginTop: "30px" }}
        >
          <div class="col">
            <div class="card">
              <img src={koleksi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={koleksi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={koleksi} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
