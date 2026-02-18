import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-4 mb-md-5">
      <div className="row text-center mt-4 mt-md-5 px-3 px-md-5 py-3">
        <h1 className="fs-3 fs-md-2 fs-lg-1">Technology</h1>
        <h3 className="text-muted mt-3 fs-6 fs-md-5 fs-lg-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
