import { Header } from ".."; // Import the Header component
// Import images
import HeroPattern from "@/assets/images/patterns/patternBGray.png";
import FloatingPattern from "@/assets/images/forWho/floatingHero.png";

export const WhoHeroSection = () => {
    return (
        <main id="heroWho">
            {/* Header component */}
            <Header />

            {/* Overlay for the hero section */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/65 z-0 w-full h-full"></div>

            {/* Hero pattern image */}
            <img src={HeroPattern} alt="Pattern" className="absolute left-0 right-0 -bottom-1 z-10 w-full" />
            <img src={FloatingPattern} alt="Pattern" className="absolute right-[10%] bottom-0 sm:bottom-5 z-10 min-w-40 max-w-[20%]" />

            <section>
                {/* Main heading */}
                <h1>Καλώς ήρθατε στο NousGym</h1>
            </section>
        </main>
    )
}