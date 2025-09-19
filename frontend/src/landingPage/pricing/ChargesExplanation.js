import React from "react";
import './ChargesExplanation.css';

function ChargesExplanation(
    {
        leftSideCharges,
        rightSideCharges,
    }
) {
    return (

        <div className="container p-5">
            <div className="mx-5 mb-5 pb-1">
                <h1 className="fs-4 mb-4">Charges for account opening</h1>
                <div className="table-wrapper mb-5">
                    <table class="table lh-lg">
                        <thead>
                            <tr>
                                <th scope="col">Type of account</th>
                                <th scope="col">Charges</th>
                            </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td>Online Account</td>
                            <td> <span class="badge text-bg-success">Free</span> </td>
                        </tr>
                        <tr>
                            <td>Offline Account</td>
                            <td> <span class="badge text-bg-success">Free</span> </td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>&#x20B9; 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>&#x20B9; 500</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <h1 className="fs-4 mb-4 pt-4">Demat AMC (Annual Maintenance Charge)</h1>
                <div className="table-wrapper">
                    <table class="table lh-lg">
                        <thead>
                            <tr>
                                <th scope="col">Value of holdings</th>
                                <th scope="col">AMC</th>
                            </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td>Up to &#x20B9;4 lakh</td>
                            <td> <span class="badge text-bg-success">Free*</span> </td>
                        </tr>
                        <tr>
                            <td>&#x20B9;4 lakh - &#x20B9;10 lakh</td>
                            <td>&#x20B9; 100 per year, charged quarterly* </td>
                        </tr>
                        <tr>
                            <td>Above &#x20B9;10 lakh</td>
                            <td>&#x20B9; 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                    <p className="table-para mt-3 mb-5 pb-5">* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). 
                        BSDA account holders cannot hold more than one demat account. To learn more about BSDA, 
                        <a href="#" className="text-decoration-none">click here.</a></p>
                <h1 className="fs-4 mt-5 mb-4">Charges for optional value added services</h1>
                <div className="table-wrapper mb-5">
                    <table class="table lh-lg">
                        <thead>
                            <tr>
                                <th scope="col">Service	Charges</th>
                                <th scope="col">Billing Frquency</th>
                                <th scope="col">Charges</th>
                            </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual </td>
                            <td>Free: 0 | Pro: 249/2399 </td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction </td>
                            <td>Buy & Invest More: 100 | SIP: 10 </td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div className="mx-5 mt-5">
                <h1 className="mb-5 fs-4">Charges explained</h1>
                <div className="row">
                    {/* Left Side Charge Sheet */}
                    <div className="col-6">
                        {leftSideCharges.map((charge, index) =>(
                                <div key={index} className="mb-3">
                                    <h4 className="fs-6">{charge.title}</h4>
                                    {charge.paragraph && charge.paragraph.map((text, pIdx) =>(
                                        <p key={pIdx} className="lh-lg mt-3" style={{fontSize:"0.75rem"}}>
                                            {text}
                                        </p>
                                    ))}
                                    {charge.points && (
                                        <ul>
                                            {charge.points.map((point, ptIdx) =>(
                                                <li key={ptIdx} className="lh-lg" style={{fontSize:"small"}}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Right Side Charge Sheet */}
                        <div className="col-6">
                        {rightSideCharges.map((charge, index) =>(
                                <div key={index} className="mb-3">
                                    <h4 className="fs-6">{charge.title}</h4>
                                    {charge.paragraph && charge.paragraph.map((text, pIdx) =>(
                                        <p key={pIdx} className="lh-lg mt-3" style={{fontSize:"0.75rem"}}>
                                            {text}
                                        </p>
                                    ))}
                                    {charge.points && (
                                        <ul>
                                            {charge.points.map((point, ptIdx) =>(
                                                <li key={ptIdx} className="lh-lg" style={{fontSize:"small"}}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             {/* Disclaimer Section */}
            <div className="mx-5 mt-4 mb-4">
                <h4 className="fs-6">Disclaimer</h4>
                <p className="lh-lg mt-3" style={{fontSize:"0.75rem"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. 
                    Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. 
                    Brokerage will not exceed the rates specified by SEBI and the exchanges. 
                    All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, 
                    exercised, and assigned options contracts. Free investments are available only for our retail individual clients. 
                    Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. 
                    A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. 
                    For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>

    );
}

export default ChargesExplanation;