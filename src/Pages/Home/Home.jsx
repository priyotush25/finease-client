
import Hero from '../../Components/Home/Hero';
import Overview from '../../Components/Home/Overview';
import HowItWorksSection from '../../Components/Home/HowItWorksSection';
import TestimonialSection from '../../Components/Home/TestimonialSection';
import Newsletter from '../../Components/Home/Newsletter';
import FAQSection from '../../Components/Home/FAQSection';
import CTASection from '../../Components/Home/TASection';
import useAuth from '../../Hooks/useAuth';
import Budget from '../../Components/Home/Budget';
import Planning from '../../Components/Home/Planning';
import Features from '../../Components/Home/Features';

const Home = () => {
    const {user} = useAuth();;
    return (
        <>
        <title>Home | FinEase</title>
            <Hero />
            {
                user && <Overview />
            }
            <Planning />
            <Features />
            <HowItWorksSection />
            <TestimonialSection />
            <Newsletter />
            <FAQSection />
            {
                !user && <CTASection />
            }
        </>
    );
};

export default Home;