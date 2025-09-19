import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='container px-5 ' style={{backgroundColor: "#fbfbfb"}}>
            <hr style={{opacity:"0.1"}} />
            <div className='row pt-4 mx-5'>
                <div className='col'>
                    <img src="/media/images/logo.svg" alt="footer-logo" style={{ width: "68%" }}></img>
                    <p className='logo-para'>© 2010 - 2025, Zerodha Broking Ltd. <br/>All rights reserved.</p>
                    <ul className='social-connection'>
                        <li className='social-list '>
                            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                     <hr style={{opacity:"0.1"}} />
                    <ul className='social-connection'>
                        <li>
                            <a href='#'><i class="fa-brands fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href='#'><i class="fa-brands fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href='#'><i class="fa-brands fa-telegram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='footer-ul'>
                        <li className='list-heading'>Account</li>
                        <li className='list-item'><a href='#'>Open demat account</a></li>
                        <li className='list-item'><a href='#'>Minor demat account</a></li>
                        <li className='list-item'><a href='#'>NRI demat account</a></li>
                        <li className='list-item'><a href='#'>Commodity</a></li>
                        <li className='list-item'><a href='#'>Dematerialisation</a></li>
                        <li className='list-item'><a href='#'>Fund transfer</a></li>
                        <li className='list-item'><a href='#'>MTF</a></li>
                        <li className='list-item'><a href='#'>Referral program</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='footer-ul'>
                        <li className='list-heading'>Support</li>
                        <li className='list-item'><a href='#'>Contact us</a></li>
                        <li className='list-item'><a href='#'>Support portal</a></li>
                        <li className='list-item'><a href='#'>How to file a complaint?</a></li>
                        <li className='list-item'><a href='#'>Status of your complaint</a></li>
                        <li className='list-item'><a href='#'>Bulletin</a></li>
                        <li className='list-item'><a href='#'>Circular</a></li>
                        <li className='list-item'><a href='#'>Z-Connect blog</a></li>
                        <li className='list-item'><a href='#'>Downloads</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='footer-ul'>
                        <li className='list-heading'>Company</li>
                        <li className='list-item'><a href='#'>About</a></li>
                        <li className='list-item'><a href='#'>Philosophy</a></li>
                        <li className='list-item'><a href='#'>Press & media</a></li>
                        <li className='list-item'><a href='#'>Careers</a></li>
                        <li className='list-item'><a href='#'>Zerodha Cares (CSR)</a></li>
                        <li className='list-item'><a href='#'>Zerodha.tech</a></li>
                        <li className='list-item'><a href='#'>Open source</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='footer-ul'>
                        <li className='list-heading'>Quick links</li>
                        <li className='list-item'><a href='#'>Upcoming IPOs</a></li>
                        <li className='list-item'><a href='#'>Brokerage charges</a></li>
                        <li className='list-item'><a href='#'>Market holidays</a></li>
                        <li className='list-item'><a href='#'>Economic calendar</a></li>
                        <li className='list-item'><a href='#'>Calculators</a></li>
                        <li className='list-item'><a href='#'>Markets</a></li>
                        <li className='list-item'><a href='#'>Sectors</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-para mt-4 mx-5'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: 
                Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity 
                Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered 
                Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
                4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write
                to <a href='#'>complaints@zerodha.com</a>, for DP related to <a href='#'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure
                Document as prescribed by SEBI | ICF</p>

                <p>Procedure to file a complaint on <a href='#'>SEBI SCORES</a>: Register on SCORES portal. Mandatory
                details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                Communication, Speedy redressal of the grievances</p>

                <p><a href='#'>Smart Online Dispute Resolution</a> | <a href='#'>Grievances Redressal Mechanism</a></p>

                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients 
                   only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number
                   with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or 
                   mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued 
                   by NSDL/CDSL every month.</p>
                
                <p>India's largest broker based on networth as per NSE. <a href='#'>NSE broker factsheet</a></p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email 
                   IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email 
                   at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities 
                   markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not 
                   undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to 
                   an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form 
                   to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your 
                   bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. 
                   If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#'>create a ticket here</a>.</p>
            </div>
            <div>
                <ul className='d-flex justify-content-center space-between' style={{listStyleType: 'none'}}>
                    <li className='footer-graveyard mx-3'><a href='#'>NSE </a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>BSE </a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>MCX </a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>Terms & conditions </a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>Policies & procedures</a> </li>
                    <li className='footer-graveyard mx-3'><a href='#'>Privacy policy</a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>Disclosure </a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>For investor's attention</a></li>
                    <li className='footer-graveyard mx-3'><a href='#'>Investor charter</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;