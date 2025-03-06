import React from "react";
import * as Icons from "../../utils/icons.util"; // Import all icons
import { Link } from "react-router-dom";

// List of Benefit covered by the psychologists
const Benefit = [
    {
        check: "Ομαδικές Συνεδρίες με Ψυχολόγο (2x τον μήνα)",
        disc: "Συμμετοχή σε live συνεδρίες με ειδικούς, σε προσιτό κόστος.",
        icon: "Beni1Icon"
    },
    {
        check: "Υποστήριξη από Ψυχολόγους",
        disc: "Άμεση επικοινωνία με ειδικούς μέσω chat & email support.",
        icon: "Beni2Icon"
    },
    {
        check: "Εβδομαδιαία Live Q&A με Ειδικούς",
        disc: "Κάνε τις ερωτήσεις σου και λάβε καθοδήγηση σε πραγματικό χρόνο.",
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
            <h2>Τα Οφέλη της Συνδρομής NOUSGYM+</h2>

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

            <Link to="https://nousgymplus.savvasgeorgiadis.com/">
                Γίνε Συνδρομητής Τώρα!
            </Link>
        </main>
    )
}