import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PropTypes from 'prop-types';
import * as Icons from "../../utils/icons.util"; // Import all icons
// Images
import BottomPattern from "@/assets/images/patterns/patternB.png";

// Array of testimonials
const testimonial = [
    {
        header: "Βαγγέλης Α.",
        review: " Όταν βρήκα το Nousgym, δεν ήξερα τι να περιμένω. Ήμουν γεμάτος αμφιβολίες και φόβους, αλλά από την πρώτη στιγμή ένιωσα κάτι που είχα καιρό να νιώσω: ασφάλεια. Η ψυχολόγος μου ήταν εκεί, με αληθινή ενσυναίσθηση, χωρίς κριτική, χωρίς βιασύνη. Με βοήθησε να βάλω σε λέξεις όσα με βάραιναν, να τα δω αλλιώς, να πάρω μια ανάσα. Σήμερα, νιώθω πιο δυνατός, πιο ελεύθερος, πιο εγώ. Αν σκέφτεσαι να κάνεις το βήμα, μην το αναβάλλεις. Το Nousgym δεν είναι απλώς ένα μέρος για να βρεις έναν ψυχολόγο – είναι ένας χώρος όπου μπορείς να ξαναβρείς τον εαυτό σου.",
        color: "text-[#469BAF]"
    },
    {
        header: "Μυροφόρα Ε.",
        review: "Δεν ήξερα αν η ψυχοθεραπεία θα με βοηθούσε, αλλά από την πρώτη συνεδρία με τη ψυχολόγο από το Nousgym, ένιωσα ότι βρήκα κάποιον που πραγματικά με καταλαβαίνει. Με έκανε να νιώσω άνετα, με βοήθησε να δω τα προβλήματά μου με νέο μάτι και, πάνω απ' όλα, με στήριξε με έναν τρόπο που δεν περίμενα. Δεν είναι απλώς καλή ψυχολόγος – είναι ένας υπέροχος άνθρωπος!",
        color: "text-[#FF9245]"
    },
    {
        header: "Δόμνα Σ.",
        review: " Όταν ξεκίνησα συνεδρίες με τη ψυχολόγο του Nousgym, δεν ήξερα τι να περιμένω. Από την πρώτη στιγμή, όμως, κατάλαβα ότι είχα βρει τον σωστό επαγγελματία. Με υπομονή, κατανόηση και απίστευτη ενσυναίσθηση, με βοήθησε να αντιμετωπίσω φόβους που πίστευα πως θα με συνόδευαν για πάντα. Ειλικρινά, δεν έχω λόγια να εκφράσω την ευγνωμοσύνη μου!",
        color: "text-[#469BAF]"
    },
];

export const TestimonialSection = ({ background = "bg-white" }) => {
    return (
        <main id="testimonial" className={background}>
            {/* Overlay Patterns for the process section */}
            <img src={BottomPattern} alt="Pattern" className="topPattern -rotate-180" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <section>
                <p>Τι Λένε Για Εμάς</p>

                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    loop={true}
                    effect="fade"
                    fadeEffect={{ crossFade: true }} // Crossfade effect
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => {
                        const swiperEl = swiper.el;
                        swiperEl.addEventListener('mouseenter', () => swiper.autoplay.stop());
                        swiperEl.addEventListener('mouseleave', () => swiper.autoplay.start());
                    }}
                >
                    {testimonial.map((item, index) => (
                        <SwiperSlide key={index}>
                            <h2>{item.header}</h2>
                            <span className={item.color}><Icons.TestimonialIcon /></span>
                            <p>{item.review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="w-full justify-between flex items-center px-10 sm:px-20">
                    <button className="prev-btn"><Icons.TestimonialArrowIcon /></button>
                    <button className="next-btn"><Icons.TestimonialArrowIcon /></button>
                </div>
            </section>
        </main>
    )
}

// Prop validation
TestimonialSection.propTypes = {
    background: PropTypes.string
};