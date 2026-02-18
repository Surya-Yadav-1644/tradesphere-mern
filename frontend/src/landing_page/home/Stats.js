import React from 'react';

function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>Thats why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh crores worth of of equity investments.</p>

                    <h2 className='fs-4'>No span or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, span, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    

                </div>

                <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
                    <img src="media/images/ecosystem.png" className="img-fluid mb-3 mb-md-0" alt="Ecosystem Img"/>
                    <div className='text-center'>
                        <a href='/' className='d-block d-md-inline-block mb-2 mb-md-0 me-md-4' style={{textDecoration: "none"}}>Explore our products <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                        <a href='/' className='d-block d-md-inline-block' style={{textDecoration: "none"}}>Try Kite demo <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Stats;
