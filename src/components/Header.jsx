import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <nav className="probootstrap-navabr-dark navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        initial
                    </Link>
                    <button
                        onClick={() => setIsCollapsed((prev) => !prev)}
                        className={`${
                            isCollapsed
                                ? "navbar-toggler collapsed"
                                : "navbar-toggler "
                        }`}
                        type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`${
                            isCollapsed
                                ? "collapse navbar-collapse justify-content-end"
                                : "collapse navbar-collapse justify-content-end active"
                        }`}
                        id="probootstrap-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link">
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
