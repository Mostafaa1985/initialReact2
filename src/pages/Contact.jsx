import HeroSection from "../components/HeroSection";
import Title from "../components/Title";
import SubscribeSection from "../components/SubscribeSection";
import GetInTouchSection from "../components/GetInTouchSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
            <HeroSection titleText={"A Good Contact"} />
            <section className="probootstrap-section">
                <div className="container">
                    <Title title={"Get In Touch"} />
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />
            <GetInTouchSection />
        </>
    );
};

export default Contact;
