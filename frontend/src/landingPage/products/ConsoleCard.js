import React from 'react';

function ConsoleCard() {
    return (
        <div className='container p-5 '>
            <div className='row mx-5'>
                <div className='col-4' style={{ marginRight: "7%", marginTop: "19%" }}>
                    <h1 className='fs-4 mb-4'>Console</h1>
                    <p className='lh-lg'>The central dashboard for your Zerodha account. 
                        Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <a href='#' className='text-decoration-none'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7'>
                    <a href='#'><img src='/media/images/console.png'></img></a>
                </div>
            </div>
        </div>
    );
}

export default ConsoleCard;