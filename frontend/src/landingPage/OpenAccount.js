import React from 'react';

function OpenAccount() {
    return (
         <div className='container p-5 mt-5 mb-5' style={{opacity:"0.8"}}>
            <div className='row text-center'>
                <h1 className='text-center fs-4 p-2'>Open a Zerodha account</h1>
                <p className='mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a href="/" className='btn btn-primary p-2 mt-4 fs-5' style={{width:"200px", margin:"0 auto"}}>Sign up for free</a>
            </div>
       </div>
    );
}

export default OpenAccount;