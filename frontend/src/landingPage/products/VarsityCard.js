import React from 'react';

function VarsityCard() {
    return (
        <div className='container p-5'>
            <div className='row mx-5'>
                <div className='col-7'>
                    <a href='#'><img src='/media/images/varsity.png' className='ms-5'></img></a>
                </div>
                <div className='col-4' style={{ marginLeft: "5%", marginTop: "12%" }}>
                    <h1 className='fs-4 mb-4'>Varsity Mobile</h1>
                    <p className='lh-lg'>An easy to grasp, collection of stock market lessons with in-depth 
                        coverage and illustrations. Content is broken down into bite-size cards 
                        to help you learn on the go.</p>
                    <div className='mt-4'>
                        <a href='#' className='text-decoration-none'><img src='/media/images/googlePlayBadge.svg' /></a>
                        <a href='#' className='text-decoration-none ms-4'><img src='/media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
            <p className='text-center fs-5' style={{marginTop: "8%"}}>Want to know more about our technology stack? 
                Check out the <a href='#' className='text-decoration-none'>Zerodha.tech</a> blog.</p>
        </div>
    );
}

export default VarsityCard;