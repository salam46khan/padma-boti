import AboutSection from "../components/Home/About/AboutSection";
import Banner from "../components/Home/banner/Banner";
import ServiceSection from "../components/Home/service/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutSection />
            <ServiceSection />
        </div>
    );
};

export default Home;