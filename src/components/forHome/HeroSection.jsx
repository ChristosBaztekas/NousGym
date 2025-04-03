import { Link } from "react-router-dom";
import { Header } from "../"; // Import the Header component
import * as Icons from "../../utils/icons.util"; // Import all icons 
// Import images
import HeroPattern from "@/assets/images/patterns/patternB.png";
import TextPattern from "@/assets/images/patterns/textPattern.png";

export const HeroSection = () => {
    return (
        <main id="hero">
            <Header />

            {/* Overlay for the hero section */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-0 w-full h-full"></div>

            {/* Hero pattern image */}
            <img src={HeroPattern} alt="Pattern" className="absolute left-0 right-0 -bottom-1 z-10 w-full" />

            <section>
                {/* Main heading */}
                <h1><span>Βρες τον </span><span>Ψυχολόγο</span><span> σου!</span></h1>

                {/* Subheading */}
                <h2>Μια σχέση εμπιστοσύνης
                    <span>
                        ξεκινά εδώ.
                        {/* Text pattern image */}
                        <img src={TextPattern} width={190} alt="Pattern" />
                    </span>
                </h2>

                {/* Description */}
                <h3>Βρες τον ψυχολόγο που ταιριάζει στις ανάγκες σου και ξεκίνησε το ταξίδι σου προς την ψυχική ευεξία!</h3>

                {/* Button with icon */}
                <Link to="/who-we" className="group bg-[#469BAF] hover:bg-[#FF9245] mt-5">
                    Ποιοι είμαστε;
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </Link>
            </section>
        </main>
    )
}