import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <img src="media/images/education.svg" className='img-fluid' alt="Education" />
                </div>
                
                <div className='col-12 col-md-6 mt-4 mt-md-0'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/education'  style={{textDecoration: "none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment cor market related queries.</p>
                    <a href='/'  style={{textDecoration: "none"}}>TradingQ&A <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>

                </div>

            </div>
        </div>
     );
}

export default Education;
