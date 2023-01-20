import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="probootstrap-footer bg-dark">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md mb-4">
                                <h2 className="probootstrap-heading probootstrap-footer-logo">
                                    <a href="#">Initial</a>
                                </h2>
                            </div>
                            <div className="col-md">
                                <div className="probootstrap-footer-widget mb-4">
                                    <h2 className="probootstrap-heading-2">
                                        Company
                                    </h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Jobs
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Press
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                News
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="probootstrap-footer-widget mb-4">
                                    <h2 className="probootstrap-heading-2">
                                        Communities
                                    </h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Support
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Sharing is Caring
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Better Web
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Good Template
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="probootstrap-footer-widget mb-4">
                                    <h2 className="probootstrap-heading-2">
                                        Useful links
                                    </h2>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Bootstrap 4
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                jQuery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                HTML5
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="py-2 d-block">
                                                Sass
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="probootstrap-footer-widget mb-4">
                            <ul className="probootstrap-footer-social list-unstyled float-md-right float-lft">
                                <li>
                                    <a href="#">
                                        <span>
                                            <BsTwitter />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <ImFacebook2 />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            <BsInstagram />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md text-left">
                        <ul className="list-unstyled footer-small-nav">
                            <li>
                                <a href="#">Legal</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Cookies</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md text-md-right text-left">
                        <p>
                            &copy; Initial 2017. All Rights Reserved. <br />{" "}
                            Made with{" "}
                            <span className="icon-heart text-danger"></span> by{" "}
                            <a href="https://uicookies.com/">uiCookies</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
