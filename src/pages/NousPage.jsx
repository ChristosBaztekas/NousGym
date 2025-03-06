// All the components of the Nous page
import { BecomeSection, BenefitsSection, ExistSection, Footer, GymPlusSection, HeroNous, QuestionSection, VideoSection, WidgetSection } from "../components"
import "../styles/forPages/nousPages.css" // Styles for the Nous page

export const NousPage = () => {
    return (
        <>
            <HeroNous />
            <VideoSection />
            <GymPlusSection />
            <BenefitsSection />
            <ExistSection />
            <QuestionSection />
            <BecomeSection />
            <WidgetSection />
            <Footer />
        </>
    )
}