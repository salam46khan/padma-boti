import AboutSection from "../components/Home/About/AboutSection";
import AdviceSection from "../components/Home/advice/AdviceSection";
import Banner from "../components/Home/banner/Banner";
import ServiceSection from "../components/Home/service/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutSection />
            <ServiceSection />
            <AdviceSection />
        </div>
    );
};

export default Home;