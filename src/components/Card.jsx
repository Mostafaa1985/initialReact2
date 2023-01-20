import React from "react";

const Card = ({ icon, title, text, className }) => {
    return (
        <div className={`${className}`}>
            <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                <div className="probootstrap-icon mb-3">
                    <span className={`${icon} display-4`}></span>
                </div>
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
