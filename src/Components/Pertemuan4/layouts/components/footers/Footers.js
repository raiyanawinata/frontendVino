import React from "react";
import "./footer.css";

export default function Footers() {
  return (
    <footer style={{ marginTop: "2rem" }} className="container bwh">
      <p>
        &copy; 2023 Vino, Inc. &middot;
        <a href="https://wa.me/083811050582" className="ms-1" target={"_blank"}>
          Contact
        </a>
      </p>
    </footer>
  );
}
