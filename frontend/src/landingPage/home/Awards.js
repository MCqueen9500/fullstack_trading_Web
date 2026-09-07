import React from 'react';
function Awards() {
    return (
        <>
            <div className="container m-5">
                <div className="row mt-5" >
                    <div className="col-6">
                        <img src="/media/largestBroker.svg" alt="Awards Image" />
                    </div>
                    <div className="col-6 mt-5">
                        <h1>Largest Stockbroker in India</h1>
                        <p>We are proud to be recognized as the largest stockbroker in India, serving millions of investors with our reliable and innovative trading platform.</p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Futures and Options</li>
                                    <br></br>
                                    <li>Commodity Trading</li>
                                    <br></br>
                                    <li>Currency Trading</li>
                                    <br></br>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Stock Trading</li>
                                    <br></br>
                                    <li>Derivatives Trading</li>
                                    <br></br>
                                    <li>Forex Trading</li>
                                    <br></br>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src="/media/pressLogos.png" alt="Award Image" style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Awards;