// All the components of the Nous page
import { BecomeSection, BenefitsSection, ExistSection, Footer, GymPlusSection, HeroNous, PricingSection, QuestionSection, VideoSection, WidgetSection } from "../components"
import "../styles/forPages/nousPages.css" // Styles for the Nous page

export const NousPage = () => {
    return (
        <>
            <HeroNous />
            <VideoSection />
            <GymPlusSection />
            <BenefitsSection />
            <ExistSection />
            <PricingSection />
            <QuestionSection />
            <BecomeSection />
            <WidgetSection />
            <Footer />
        </>
    )
}