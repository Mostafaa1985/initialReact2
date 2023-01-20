import HeroSection from "../components/HeroSection";
import ServicesCarousel from "../components/ServicesCarousel";
import ServicesCard from "../components/ServicesCard";
import SubscribeSection from "../components/SubscribeSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Title from "../components/Title";

const Services = () => {
    return (
        <>
            <HeroSection titleText={"A Good Services"} />
            <section className="probootstrap-section">
                <div className="container">
                    <Title title={"The Team"} subTitle={"Images"} />
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <ServicesCarousel />
                        </div>
                    </div>
                    <Title
                        title={"Our Services"}
                        className={"pt-5"}
                        subTitle={"Icons"}
                    />
                    <ServicesCard className={"col-lg-4 col-md-6"} />
                </div>
            </section>
            <SubscribeSection />
            <GetInTouchSection />
        </>
    );
};

export default Services;
