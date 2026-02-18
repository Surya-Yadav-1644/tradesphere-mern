import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row px-3 px-md-5 py-4 py-md-5 mt-4 mt-md-5 text-center border-top">
        <div className="col-12 col-lg-8 p-3 p-md-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5" }}
            className="text-muted fs-6 px-2 px-md-0"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 p-3 p-md-4 mt-4 mt-lg-0">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
