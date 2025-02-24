import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"
import * as Icons from "../../utils/icons.util"; // Import all icons

export const TestimonialSection = () => {
    return (
        <main id="testimonial">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="absolute left-0 right-0 top-0 z-10 w-full" />
            <img src={BottomPattern} alt="Pattern" className="absolute left-0 right-0 bottom-0 z-10 w-full" />

            <section>
                <p>TESTIMONIALS</p>

                <Swiper
                    modules={[Navigation]}
                    navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                    loop={true}
                >
                    <SwiperSlide>
                        <h2>Δόμνα Σ.</h2>
                        <span className="text-[#469BAF]"><Icons.TestimonialIcon /></span>
                        <p>
                            Όταν ξεκίνησα συνεδρίες με τη ψυχολόγο του Nousgym, δεν ήξερα τι να περιμένω. Από την πρώτη στιγμή, όμως, κατάλαβα ότι είχα βρει τον σωστό επαγγελματία. Με υπομονή, κατανόηση και απίστευτη ενσυναίσθηση, με βοήθησε να αντιμετωπίσω φόβους που πίστευα πως θα με συνόδευαν για πάντα. Ειλικρινά, δεν έχω λόγια να εκφράσω την ευγνωμοσύνη μου!
                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h2>Μυροφόρα Ε.</h2>
                        <span className="text-[#FF9245]"><Icons.TestimonialIcon /></span>
                        <p>
                            Δεν ήξερα αν η ψυχοθεραπεία θα με βοηθούσε, αλλά από την πρώτη συνεδρία με τη ψυχολόγο από το Nousgym, ένιωσα ότι βρήκα κάποιον που πραγματικά με καταλαβαίνει. Με έκανε να νιώσω άνετα, με βοήθησε να δω τα προβλήματά μου με νέο μάτι και, πάνω απ' όλα, με στήριξε με έναν τρόπο που δεν περίμενα. Δεν είναι απλώς καλή ψυχολόγος – είναι ένας υπέροχος άνθρωπος!                        </p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h2>Βαγγέλης Α.</h2>
                        <span className="text-[#469BAF]"><Icons.TestimonialIcon /></span>
                        <p>
                            Όταν βρήκα το Nousgym, δεν ήξερα τι να περιμένω. Ήμουν γεμάτος αμφιβολίες και φόβους, αλλά από την πρώτη στιγμή ένιωσα κάτι που είχα καιρό να νιώσω: ασφάλεια. Η ψυχολόγος μου ήταν εκεί, με αληθινή ενσυναίσθηση, χωρίς κριτική, χωρίς βιασύνη. Με βοήθησε να βάλω σε λέξεις όσα με βάραιναν, να τα δω αλλιώς, να πάρω μια ανάσα. Σήμερα, νιώθω πιο δυνατός, πιο ελεύθερος, πιο εγώ. Αν σκέφτεσαι να κάνεις το βήμα, μην το αναβάλλεις. Το Nousgym δεν είναι απλώς ένα μέρος για να βρεις έναν ψυχολόγο – είναι ένας χώρος όπου μπορείς να ξαναβρείς τον εαυτό σου.                        </p>
                    </SwiperSlide>

                </Swiper>

                <button className="prev-btn"><Icons.TestimonialArrowIcon /></button>
                <button className="next-btn"><Icons.TestimonialArrowIcon /></button>
            </section>
        </main>
    )
}