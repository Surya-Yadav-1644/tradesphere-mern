import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 text-center text-md-start">
          <img src={imageURL} className="img-fluid" />
        </div>
        
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} className="ms-3 ms-md-5">
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                className="ms-3 ms-md-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
