import { useState } from "react";

const ContactForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form
            action="#"
            method="post"
            className="probootstrap-form mb-5"
            onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="fname">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fname"
                            name="fname"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="lname">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lname"
                            name="lname"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group mb-4">
                <label for="message">Message</label>
                <textarea
                    cols="30"
                    rows="10"
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"></textarea>
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    className="btn btn-primary"
                    id="submit"
                    name="submit"
                    value="Send Message"
                />
            </div>
        </form>
    );
};

export default ContactForm;
