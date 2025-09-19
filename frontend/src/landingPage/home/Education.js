import React from "react";

function Education(){
    return(
        <div className="container mt-5 p-5">
            <div className="row mx-5">
                <div className="col-6 ">
                    <img src="/media/images/education.svg" style={{width:"80%"}}></img>
                </div>
                <div className="col-6 mt-4" style={{lineHeight:"1.8rem"}}>
                    <h1 className="fs-4 mb-4">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the
                         world covering everything from the basics to advanced trading.</p>
                    <a href="#" className="text-decoration-none">Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment
                         community in India for all your market related queries.</p>
                    <a href="#" className="text-decoration-none">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Education;