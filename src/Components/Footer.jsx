import React from "react";

const Footer = () => {
    let year = new Date();
    year = year.getFullYear();

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center bg-dark text-white">
                        Portfolio Created By Abdul Rehman | {year} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;