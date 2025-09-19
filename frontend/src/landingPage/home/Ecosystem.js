import React from 'react';
function Ecosystem() {
    return ( 
          <div className='container p-5 mt-5'>f
                <div className='row mx-5 '>
                    <div className='col-5 lh-lg'>
                        <h2 className='mb-5 fs-4'>Trust with confidence</h2>
                        <h3 className='fs-5'>Customer-first always</h3>
                        <p className='opacity-75 mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, 
                            making us India’s largest broker; 
                            contributing to 15% of daily retail exchange volumes in India.</p>
                        <h3 className='fs-5'>No spam or gimmicks</h3>
                        <p  className='opacity-75 mb-4'>No gimmicks, spam, "gamification",
                             or annoying push notifications. 
                             High quality apps that you use at your pace, 
                             the way you like. <a href="#" className='text-decoration-none'>Our philosophies.</a></p>
                        <h3 className='fs-5'>The Zerodha universe</h3>
                        <p  className='opacity-75 mb-4'>Not just an app, but a whole ecosystem. 
                            Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h3 className='fs-5'>Do better with money</h3>
                        <p  className='opacity-75 mb-4'>With initiatives like  
                            <a href="#" className='text-decoration-none'> Nudge</a> and 
                            <a href="#" className='text-decoration-none'> Kill Switch</a>,
                             we don't just facilitate transactions, 
                             but actively help you do better with your money.</p>
                    </div>
                    <div className='col-7 pt-5'>
                        <div>
                            <img src='/media/images/ecosystem.png' className='w-100'/>
                        </div>
                        <p className='text-center fw-medium p-4  '>
                            <a href='#'  className='p-5 text-decoration-none'>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                            <a href='#'  className='text-decoration-none'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
                 <div className='text-center pt-5'>
                        <img src='/media/images/pressLogos.png' className='align-center'></img>
                 </div>
            </div>
     );
}

export default Ecosystem;