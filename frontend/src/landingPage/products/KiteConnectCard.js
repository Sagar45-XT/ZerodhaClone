import React from 'react';

function KiteConnectCard() {
    return (
        <div className='container p-5 '>
            <div className='row mx-5'>
                <div className='col-4' style={{ marginRight: "7%", marginTop: "7%" }}>
                    <h1 className='fs-4 mb-4'>Kite Connect API</h1>
                    <p className='lh-lg'>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
                            If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <a href='#' className='text-decoration-none'>Kite Connect <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7 ms-2'>
                    <a href='#'><img src='/media/images/kiteConnect.svg'></img></a>
                </div>
            </div>
        </div>
    );
}

export default KiteConnectCard;