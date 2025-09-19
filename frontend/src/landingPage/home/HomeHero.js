import React from 'react';

function HomeHero(){
    return(
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="/media/images/HomeHero.png" alt="homeImage" className='mb-5 w-75 m-auto'></img>
                <h1 className='text-center fs-2'>Invest in everthing</h1>
                <p className='mt-2 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="/" className='btn btn-primary p-2 mt-4 fs-5' style={{width:"200px", margin:"0 auto"}}>Sign up for free</a>
            </div>
       </div>
    );
};

export default HomeHero;