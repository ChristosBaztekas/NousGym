// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection } from "../components";
import "../styles/home-page.css"

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProcessSection />
            <ToolkitSection />
            <WhySection />
            <OnlineSection />
            <AppointmentSection />
            <CoverSection />
        </>
    );
};