import React from 'react';

function RightSection({imageURL, productName, productDiscription, learnMore }) {
    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5 order-2 order-md-1">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center text-md-start order-1 order-md-2">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
