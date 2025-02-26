// All the components of the Home page
import { HeroSection, AboutSection, ProcessSection, ToolkitSection, WhySection, OnlineSection, AppointmentSection, CoverSection, CoursesSection, Footer, QuestionSection, WidgetSection, TestimonialSection } from "../components";
import "../styles/homePage.css" // Styles for the Home page
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