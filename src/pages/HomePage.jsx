// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection, QuestionSection, WidgetSection, TestimonialSection, Footer } from "../components";
import "../styles/forPages/homePage.css" // Styles for the Home page
import useSmoothScroll from "../utils/functions.util"; // SmoothScroll function

export const HomePage = () => {
    useSmoothScroll();

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
            <TestimonialSection />
            <WidgetSection />
            <Footer />
        </>
    );
};