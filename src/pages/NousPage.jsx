// All the components of the Nous page
import { Footer, HeroNous, QuestionSection, WidgetSection } from "../components"
import "../styles/forPages/nousPages.css" // Styles for the Nous page

export const NousPage = () => {
    return (
        <>
            <HeroNous />
            <QuestionSection />
            <WidgetSection />
            <Footer />
        </>
    )
}