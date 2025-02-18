import { Header } from "../components/bars/Header"; // Import the Header component
import HeroPattern from "../assets/images/patterns/heroPattern.png"; // Import the hero pattern image
import TextPattern from "../assets/images/patterns/textPattern.png"; // Import the text pattern image
import * as Icons from "../utils/icons.util"; // Import all icons from the icons.util file
import { HeroSection, AboutSection } from "../components";

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
        </>
    );
};