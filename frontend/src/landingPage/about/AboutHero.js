import React from 'react';

function AboutHero() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <h1 className='p-3 mt-5 mb-4 fs-4 text-center lh-base'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row p-5 mt-5 mb-5 mx-5 border-top lh-lg'>
                <div className='col-6 mt-5'>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal
                        of breaking all barriers that traders and investors face in India in
                        terms of cost, support, and technology. We named the company Zerodha,
                        a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made
                        us the biggest stock broker in India.</p>

                    <p>Over 1.6+ crore clients place billions of orders every year through our
                        powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-6  mt-5'>
                    <p>In addition, we run a number of popular open online educational and community
                        initiatives to empower retail traders and investors.</p>

                    <p><a href="#" className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator,
                        has invested in several fintech
                        startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest
                        updates on our <a href="#" className='text-decoration-none'>blog</a> or see what the media is
                        <a href="#" className='text-decoration-none'>saying about us</a> or
                        learn more about our business and product
                        <a href="#" className='text-decoration-none'>philosophies</a>.</p>
                </div>
            </div>
            <div className='row mt-5 mb-3 text-center'>
                <h1 className='fs-4'>People</h1>
            </div>
            <div className='row mx-5'>
                <div className='col-5 mt-4 me-0 pe-0 text-center'>
                    <img src='/media/images/nithinKamath.jpg' className='rounded-circle' style={{width: "65%", marginLeft:"40px"}}></img>
                    <h5 className='mt-3 ms-4'>Nithin Kamath</h5>
                    <p className='ms-3 mt-3 fs-6'> Founder, CEO</p>
                </div>
                <div className='col-7 mt-5 lh-lg pe-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced 
                        during his decade long stint as a trader. Today, Zerodha has changed the landscape 
                        of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market 
                        Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href='#' className='text-decoration-none'>Homepage</a> / 
                        <a href='#' className='text-decoration-none'> TradingQnA</a> / 
                        <a href='#' className='text-decoration-none'> Twitter</a></p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default AboutHero;