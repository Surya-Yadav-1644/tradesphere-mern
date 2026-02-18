import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Section' className='img-fluid mb-4 mb-md-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/signup">
                <button className='p-3 btn btn-primary fs-6 fs-md-5 mb-5 w-75 w-md-50 w-lg-25 d-block mx-auto'>Signup Now</button>
                </Link>
            </div>


        </div>
    );
}

export default Hero;
