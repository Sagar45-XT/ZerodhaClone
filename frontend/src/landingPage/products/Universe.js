import React from 'react';
import './Universe.css';

function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='universe-heading text-center'>
                <h1 className='fs-4 mb-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mx-5 mt-5 pt-3'>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/zerodhaFundhouse.png' className='logoImg'></img>
                    <p className="logoPara mt-3">Our asset management venture <br/>
                    that is creating simple and transparent index <br/>
                    funds to help you save for your goals.</p></a>
                </div>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/sensibullLogo.svg' className='logoImg'></img>
                    <p className="logoPara mt-3">Options trading platform that lets you<br/>
                    create strategies, analyze positions, and examine <br/>
                    data points like open interest, FII/DII, and more.</p></a>
                </div>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/tijori.svg' className='logoImg'></img>
                    <p className="logoPara mt-3">Investment research platform <br/>
                    that offers detailed insights on stocks, <br/>
                    sectors, supply chains, and more.</p></a>
                </div>
            </div>
            
            <div className='row mx-5 mt-5 '>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/streakLogo.png' className='logoImg2'></img>
                    <p className="logoPara mt-3">Systematic trading platform <br/>
                    that allows you to create and backtest <br/>
                    strategies without coding.</p></a>
                </div>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/smallcaseLogo.png' className='logoImg2'></img>
                    <p className="logoPara mt-3">Thematic investing platform <br/>
                    that helps you invest in diversified <br/>
                    baskets of stocks on ETFs.</p></a>
                </div>
                <div className='col-4 text-center'>
                    <a href='#' className='text-decoration-none'><img src='/media/images/dittoLogo.png' className='logoImg2'></img>
                    <p className="logoPara mt-3">Personalized advice on life <br/>
                    and health insurance. No spam <br/>
                    and no mis-selling.</p></a>
                </div>
            </div>
            <div class="mini-container text-center mt-2 mb-3">
		        <a href="/" className='btn btn-primary p-2 mt-4 fs-5' style={{width:"200px", margin:"0 auto"}}>Sign up for free</a>
	        </div>
        </div>
     );
}

export default Universe;