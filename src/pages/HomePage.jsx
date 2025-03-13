// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection, QuestionSection, WidgetSection, TestimonialSection, Footer } from "../components";
import "../styles/forPages/homePage.css" // Styles for the Home page

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
            {/* <CoursesSection /> */}
            <QuestionSection />
            <TestimonialSection background="bg-[#F1F1F1]" />
            <WidgetSection />
            <Footer />
        </>
    );
};