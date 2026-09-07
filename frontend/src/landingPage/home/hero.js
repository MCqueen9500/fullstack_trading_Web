import React from 'react';
function Hero() {
    return (  
        <>
        <div className="container">
            <div className="row" style={{ textAlign: 'center' }}>
                <div className="col-12">
                     <img src="/media/homeHero.png" className="mb-5" alt="Hero Image" style={{ width: '100%', maxWidth: '600px'}} />
                     <h1>Invest in everything</h1>
                     <p>Trade stocks, crypto, and more with ease. Start your investment journey today!</p>
                     <button className="btn btn-primary p-2 mb-5" style={{width:"10rem"}}>Signup for Free</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;