// All the components of the Who page
import { WhoHeroSection, WhoAboutSection, Footer, WhoDescriptionSection, WhoOfferSection, WidgetSection, TestimonialSection, QuestionSection, InvestSection, ForYouSection, ChooseOurSection } from "../components";
import "../styles/forPages/whoPage.css" // Styles for the Who page

export const WhoPage = () => {
    return (
        <>
            <WhoHeroSection />
            <WhoDescriptionSection />
            <WhoAboutSection />
            <WhoOfferSection />
            <ChooseOurSection />
            <ForYouSection />
            <QuestionSection />
            <InvestSection />
            <TestimonialSection />
            <WidgetSection />
            <Footer />
        </>
    )
}