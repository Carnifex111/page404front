import React from "react";
import "./404.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="wrap" data-aos="zoom-out">
      <h1>404</h1>
      <p>This page does not exist</p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          marginTop: "20px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Page404;
