import React from 'react';

function PricingHero() {
    return ( 
        <div className='container p-5'>
            <div className='heading text-center mt-5 pt-3 pb-5'>
                <h1 className='fs-3 mb-3'>Charges</h1>
                <p className='text-secondary fs-5 opacity-50'>List of all charges and taxes</p>
            </div>
            <div className='row mx-5 text-center mt-5 pt-5'>
                <div className='col-4'>
                    <img src='/media/images/pricing0.svg' className='w-75 mb-4'></img>
                    <h3>Free equity delivery</h3>
                    <p className='mt-4 lh-lg opacity-75'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/other-trades.svg' className='w-75 mb-4'></img>
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-4 lh-lg opacity-75'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across 
                        equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/pricing0.svg' className='w-75 mb-4 '></img>
                    <h3>Free direct MF</h3>
                    <p className='mt-4 lh-lg opacity-75'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default PricingHero;