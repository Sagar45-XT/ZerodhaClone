import React from 'react';
import "./Pricing.css";

function Pricing() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row mx-5'>
                <div className='col-5'>
                    <h2 className='mb-4 fs-4'>Unbeatable pricing</h2>
                    <p className='lh-lg'>We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.</p>
                    <a href="#" className='text-decoration-none fw-medium'><p>See pricing <i className="fa-solid fa-arrow-right"></i> </p></a>
                </div>
                <div className='pricing col-7 d-flex gap-3'>
                    <div className="d-flex align-items-center">
                        <img src='/media/images/pricing0.svg' style={{ width: "125px", margin: 0 }} />
                        <p className="pricing-para">Free account <br />opening</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <img src='/media/images/pricing0.svg' style={{ width: "125px", margin: 0 }} />
                        <p className="pricing-para">Free equity delivery <br />and direct mutual funds</p>
                    </div>

                    <div className="d-flex align-items-center" >
                        <img src='/media/images/other-trades.svg' style={{ width: "125px", margin: 0 }} />
                        <p className="pricing-para ms-1">Intraday and <br />F&O</p>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Pricing;