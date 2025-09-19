import React from 'react';

function CoinCard() {
    return (
        <div className='container p-5'>
            <div className='row mx-5'>
                <div className='col-7'>
                    <a href='#'><img src='/media/images/coin.png'></img></a>
                </div>
                <div className='col-4 mt-5' style={{ marginLeft: "5%" }}>
                    <h1 className='fs-4 mb-4'>Coin</h1>
                    <p className='lh-lg'>Buy direct mutual funds online, commission-free, 
                        delivered directly to your Demat account. Enjoy the investment experience
                         on your Android and iOS devices.</p>
                    <a href='#' className='text-decoration-none'>Coin <i className="fa-solid fa-arrow-right"></i></a>
                    <div className='mt-4'>
                        <a href='#' className='text-decoration-none'><img src='/media/images/googlePlayBadge.svg' /></a>
                        <a href='#' className='text-decoration-none ms-4'><img src='/media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinCard;