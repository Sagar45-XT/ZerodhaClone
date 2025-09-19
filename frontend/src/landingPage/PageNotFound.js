import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
         <div className='container p-5 mt-5 mb-5'>
            <div className='row ps-5'>
                <h1 className='text-start fs-3 p-2'>404</h1>
                <p className='fs-5'>Couldn’t find that page <br/>
                    Visit <Link to= "/" className='text-decoration-none'>Zerodha’s home page </Link></p>
            </div>
       </div>
    );
}

export default PageNotFound;