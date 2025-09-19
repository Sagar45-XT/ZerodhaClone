import React from 'react';

function KiteCard() {
    return ( 
        <div className='container p-5'>
            <div className='row mx-5'>
                <div className='col-7'>
                    <a href='#'><img src='/media/images/kite.png'></img></a>
                </div>
                <div className='col-4 mt-5' style={{marginLeft:"5%"}}>
                    <h1 className='fs-4 mb-4'>Kite</h1>
                    <p className='lh-lg'>Our ultra-fast flagship trading platform with streaming market data, 
                        advanced charts, an elegant UI, and more. Enjoy the Kite experience 
                        seamlessly on your Android and iOS devices.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <a href='#' className='text-decoration-none'>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className='col-6'>
                            <a href='#' className='text-decoration-none'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className='mt-4'>
                            <a href='#' className='text-decoration-none'><img src='/media/images/googlePlayBadge.svg'/></a>
                            <a href='#' className='text-decoration-none ms-4'><img src='/media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default KiteCard;