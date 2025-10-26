import React from 'react';

function InvestmentOptions() {
    return (
        <div className='container p-5 mt-5'>
            <h4 className='text-center mb-5'>Investment options with Zerodha demat account</h4>
            <div className='row mx-5 pt-5'>
                <div className='col-6'>
                     <div style={{ display: "flex", alignItems: "center", marginBottom: "3rem", marginRight: "2rem" }}>
                        <img src='media/images/stocks-acop.svg' style={{ width: "110px", marginRight: "1rem" }} alt="Stocks" />
                        <div>
                            <h5 className='ms-3'>Stocks</h5>
                            <p className='ms-3'>Invest in all exchange-listed securities</p>
                        </div>
                    </div>                    
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "3rem", marginRight: "2rem" }}>
                        <img src='media/images/ipo-acop.svg' style={{ width: "110px", marginRight: "1rem" }} alt="Stocks" />
                        <div>
                            <h5 className='ms-3'>IPO</h5>
                            <p className='ms-3'>Apply to the latest IPOs instantly via UPI</p>
                        </div>
                    </div>  
                </div>
                <div className='col-6'>
                    <div style={{ display: "flex", alignItems: "center",marginBottom: "3rem", marginRight: "2rem" }}>
                        <img src='media/images/mf-acop.svg' style={{ width: "110px", marginRight: "1rem" }} alt="Stocks" />
                        <div>
                            <h5 className='ms-3'>Mutual funds</h5>
                            <p className='ms-3'>Invest in commission-free direct mutual funds</p>
                        </div>
                    </div>  
                   <div style={{ display: "flex", alignItems: "center", marginBottom: "3rem", marginRight: "2rem"  }}>
                        <img src='media/images/fo-acop.svg' style={{ width: "110px", marginRight: "1rem" }} alt="Stocks" />
                        <div>
                            <h5 className='ms-3'>Futures & options</h5>
                            <p className='ms-3'>Hedge and mitigate market risk through simplified F&O trading</p>
                        </div>
                    </div>  
                </div>
            </div>
    
            <div className='row text-center mt-5'>
                <h1 className='text-center fs-3'>Open a Zerodha account</h1>
                <p className='mt-3 fs-5'>Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
                <a href="#" className='btn btn-primary p-2 mt-4 fs-5' style={{width:"200px", margin:"0 auto"}}>Signup for free</a>
            </div>
       </div>
    
    );
}
export default InvestmentOptions;