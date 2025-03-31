import { Helmet, HelmetProvider } from "react-helmet-async";
import { BecomeSection, BenefitsSection, ExistSection, Footer, GymPlusSection, HeroNous, PricingSection, QuestionSection, VideoSection, WidgetSection } from "../components";
import "../styles/forPages/nousPages.css"; // Styles for the Nous page

export const NousPage = () => {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <meta property="og:description" content="Join NousGym+ to experience premium fitness training with expert trainers and a wide range of services." />
                    <meta property="og:image" content="https://nousgym.gr/assets/nousHero-CJoSeIaB.png" />
                    <meta property="og:url" content="https://nousgym.gr/nous-gym" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="NousGym+" />
                    <meta name="twitter:description" content="Join NousGym+ to experience premium fitness training with expert trainers and a wide range of services." />
                    <meta name="twitter:image" content="https://nousgym.gr/assets/nousHero-CJoSeIaB.png" />
                    </Helmet>

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
        </HelmetProvider>
    );
};