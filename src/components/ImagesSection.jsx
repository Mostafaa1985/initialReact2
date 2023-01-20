import { person_1 } from "../assets";
import { person_2 } from "../assets";
import { person_3 } from "../assets";

const ImagesSection = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={person_1}
                            alt="Free Template by uicookies.com"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src={person_2}
                            alt="Free Template by uicookies.com"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src={person_3}
                            alt="Free Template by uicookies.com"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagesSection;
