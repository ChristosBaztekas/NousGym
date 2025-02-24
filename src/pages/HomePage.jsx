// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection, CoursesSection, Footer, QuestionSection, WidgetSection, TestimonialSection } from "../components";
import "../styles/homePage.css" // Styles for the Home page

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
            <TestimonialSection />
            <WidgetSection />
            <Footer />
        </>
    );
};