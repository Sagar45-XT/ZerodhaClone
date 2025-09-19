import React from 'react';

function Team() {
    return ( 
        <div className='container p-5 mt-3'>
            <div className='row mb-5 '>
                <div className='col-4 text-center'>
                    <img src='/media/images/Nikhil.jpg' className='rounded-circle w-50'></img>
                    <h6>Nikhil Kamath</h6>
                    <p>Co-founder & CFO</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/Kailash.jpg' className='rounded-circle w-50'></img>
                    <h6>Dr. Kailash Nadh</h6>
                    <p>CTO</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/Venu.jpg' className='rounded-circle w-50'></img>
                    <h6>Venu Madhav</h6>
                    <p>COO</p>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-4 text-center'>
                    <img src='/media/images/Hanan.jpg' className='rounded-circle w-50'></img>
                    <h6>Hanan Delvi</h6>
                    <p>CCO</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/Seema.jpg' className='rounded-circle w-50'></img>
                    <h6>Seema Patil</h6>
                    <p>Director</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/karthik.jpg' className='rounded-circle w-50'></img>
                    <h6>Karthik Rangappa</h6>
                    <p>Chief of Education</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4 text-center'>
                    <img src='/media/images/Austin.jpg' className='rounded-circle w-50'></img>
                    <h6>Austin Prakesh</h6>
                    <p>Director Strategy</p>
                </div>
            </div>
        </div>
     );
}

export default Team;