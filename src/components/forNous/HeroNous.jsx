import { Header } from "../"; // Import the Header component
import useSmoothScroll from "@/utils/functions.util";
import * as Icons from '../../utils/icons.util'; // Import all icons
// Import images
import FloatingPattern from "@/assets/images/forWho/floatingHero.png";

export const HeroNous = () => {
    useSmoothScroll();
    return (
        <main id="nous">
            <Header />

            {/* Hero pattern image */}
            <img src={FloatingPattern} alt="Pattern" className="absolute right-[7%] bottom-0 min-w-40 max-w-[20%] z-0" />

            <section>
                {/* Subheading */}
                <h2>Το Γυμναστήριο για τον Νου & την Ψυχή σου</h2>

                {/* Button with icon */}
                <a href="#price" className="group bg-[#469BAF] hover:bg-[#FF9245] mx-auto text-white">
                    Ξεκίνα Τώρα!
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </a>
            </section>
        </main>
    )
}