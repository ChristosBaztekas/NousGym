import React from "react";
import * as Icons from "../../utils/icons.util"; // Import all icons
import { Link } from "react-router-dom";

// List of Benefit covered by the psychologists
const Benefit = [
    {
        check: "Ομαδικές Συνεδρίες με Ψυχολόγο (2x τον μήνα)",
        disc: "Συμμετοχή σε συνεδρίες με ειδικούς, σε προσιτό κόστος.",
        icon: "Beni1Icon"
    },
    {
        check: "Επικοινωνία με Ψυχολόγους",
        disc: "Αμεση επικοινωνια με ειδικους ψυχικης υγειας μέσα απο τα κανάλια μας",
        icon: "Beni2Icon"
    },
    {
        check: "Συνεδρία Για Όλους: Live Q&A",
        disc: "Kανε τις ερωτήσεις σου στο εβδομαδιαίο live q&a και λαβε απαντησεις απο ειδικούς σε πραγματικό χρόνο",
        icon: "Beni3Icon"
    },
    {
        check: "Πρόσβαση σε Premium Περιεχόμενο",
        disc: "PDF, οδηγοί και πολλά άλλα προσαρμοσμένα για την επίτευξη καθημερινής ανάπτυξης.",
        icon: "Beni4Icon"
    },
    {
        check: "Κοινότητα & Υποστήριξη",
        disc: "Δικτύωση με άλλους ανθρώπους που έχουν τους ίδιους στόχους.",
        icon: "Beni5Icon"
    }
];

export const BenefitsSection = () => {
    return (
        <main id="benefit">
            {/* Section Title */}
            <h2>Τα Οφέλη της Συνδρομής NousGym+</h2>

            <div>
                {/* List of Benefit */}
                <ul>
                    {Benefit.map((benefit, index) => (
                        <li key={index}>
                            <article>
                                <span className="font-medium">
                                    <Icons.CheckIcon />
                                    {benefit.check}
                                </span>
                                <span className="text-sm xs:text-lg">
                                    {React.createElement(Icons[benefit.icon])}
                                    {benefit.disc}
                                </span>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>

            <Link
                to="https://nousgymplus.savvasgeorgiadis.com/"
                target="_parent"
                className=" animate-float shadow-[0_0_25px_rgb(255,146,69)] hover:shadow-[0_0_40px_rgb(70,155,175)] transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold">
                Γίνε Συνδρομητής Τώρα!
            </Link>
        </main>
    )
}