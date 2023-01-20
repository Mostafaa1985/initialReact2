import { bg_1 } from "../assets";

const SubscribeSection = () => {
    return (
        <section
            className="probootstrap-cover overlay text-center"
            style={{ backgroundImage: `url(${bg_1})` }}>
            <div className="container">
                <div className="row probootstrap-vh-75 align-items-center">
                    <div className="col-md-12">
                        <h2 className="probootstrap-heading">
                            Subscribe To Download
                        </h2>
                        <h3 className="h3 probootstrap-subheading mb-5">
                            A free template by{" "}
                            <a href="https://uicookies.com/">uicookies.com</a>
                        </h3>
                        <p>
                            <a
                                href="https://uicookies.com/"
                                target="_blank"
                                className="btn btn-primary">
                                Get Started
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;
