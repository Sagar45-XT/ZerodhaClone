import React from 'react';

function ProductHero() {
    return (
        <div className='container text-center p-5 mt-5 '>
            <div className='row mt-4 mx-5 border-bottom'>
                <h1 className='fs-3 mb-3'>Zerodha Products</h1>
                <p className='fs-5 mb-4'>Sleek, modern, and intuitive trading platforms</p>
                <p style={{marginBottom: "10%"}}>Check out our <a href='#' className='text-decoration-none'>investment offerings <span>→</span></a></p>
            </div>
        </div>
    );
}

export default ProductHero;