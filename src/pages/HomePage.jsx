// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection, CoursesSection, Footer, QuestionSection, WidgetSection } from "../components";
import "../styles/homePage.css"

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
            <CoursesSection />
            <QuestionSection />
            <WidgetSection />
            <Footer />
        </>
    );
};