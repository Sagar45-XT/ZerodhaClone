import React from 'react';

function CreateTicket() {
    return (
        <div className='bg-body-secondary bg-opacity-75'>
            <div className='container p-5 mt-3'>
                <div className=''>
                    <div className='ticket d-flex justify-content-between mb-4 w-100 '>
                        <h1 className='fs-1 fw-semibold'>Support Portal</h1>
                        <span><button type="button" className="btn btn-primary">My tickets</button></span>
                    </div>
                    <div class="input-group mb-">
                        <span class="input-group-text" id="basic-addon1">
                            <i className="fa fa-search text-muted mx-2"></i>
                        </span>
                        <input type="text" 
                        className="form-control p-3 border" 
                        placeholder="Eg: How do I open my account, How do I activate F&O..." 
                        aria-describedby="basic-addon1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTicket;