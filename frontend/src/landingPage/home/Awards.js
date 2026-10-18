import React from 'react';
function Awards() {
    return (
        <>
            <div className="container m-10">
                <div className="row mt-5" style={{display:"flex" ,justifyContent:"center",flexWrap:"wrap"}}>
                    <div className="col-6 " style={{width:"33rem",margin:"0 0 0 0",height:"20rem"}}>
                        <img src="/media/largestBroker.svg" alt="Awards Image" style={{ width: "100%" ,height:"100%"}} />
                    </div>
                    <div className="col-6"  style={{width:"33rem",margin:"0 0 0 0",height:"20rem"}}>
                        <div className="content" style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <h1>Largest Stockbroker in India</h1>
                        <p>We are proud to be recognized as the largest stockbroker in India, serving millions of investors with our reliable and innovative trading platform.</p>
                        <div className="row" style={{ width: "100%" }}>
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
            </div>
        </>
    );
}

export default Awards;