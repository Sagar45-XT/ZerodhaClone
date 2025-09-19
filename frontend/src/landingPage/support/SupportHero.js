import React from 'react';
import './SupportHero.css';

function SupportHero( 
    {optionDropdown}
) {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className="col-8">
                {optionDropdown.map((option, idx)=> (
                    <div key={idx} className="btn-group w-100 border mb-4">
                        <button
                            className="btn dropdown-toggle d-flex justify-content-between align-items-center w-100"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false">
                            
                            <span className='dropdown-text lh-lg p-1 fw-medium' style={{fontSize: "1.10rem"}}>
                                <a href='#'><i className={option.icon} style={{marginRight: "30px"}}></i></a>
                                    {option.title}
                            </span>
                            
                            <span className="dropdown-caret"></span>
                        </button>
                        <ul className="dropdown-menu w-100">
                            {option.items.map((item, itemIdx) => (
                                <li key={itemIdx}><a className="dropdown-item" href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                  ))} 
                </div>
                <div className='col-4 ps-4'>
                    <div className='bg-warning-subtle py-2 border-start border-5  border-warning'>
                        <ul className='ms-2 me-5 '>
                            <li className='p-2'><a href='#'>Surveillance measure on scrips - September 2025</a></li>
                            <li className='p-2'><a href='#'>Latest Intraday leverages and Square-off timings</a></li>
                        </ul>
                    </div>
                    <div className='left-table pt-4'>
                        <table class="table table-bordered fs-6">
                            <thead>
                                <tr>
                                    <th scope="col" className='bg-body-secondary'>Quick links</th>
                                </tr>
                            </thead>
                            <tbody className='table-body'>
                                <tr>
                                    <td><a href='#'>1. Track account opening</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#'>2. Track segment activation</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#'>3. Intraday margins</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#'>4. Kite user manual</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportHero;