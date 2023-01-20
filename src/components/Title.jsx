import React from "react";

const Title = ({ title, className, subTitle }) => {
    return (
        <div className={`row mb-5 ${className}`}>
            <div className="col-md-4">
                <h2 className="h1 mb-5 mt-0">
                    {title}
                    <br />
                    {subTitle && <span className="sub-title">{subTitle}</span>}
                </h2>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <p className="lead">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                </p>
            </div>
        </div>
    );
};

export default Title;
