import { useState } from "react";
import { CheckBox } from "../custom/CheckBox"; // Import CheckBox component
import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import ToolKit from "@/assets/images/forHome/toolkit.svg";
import TextPattern from "@/assets/images/patterns/textPattern.png";
import FloatOPattern from "@/assets/images/patterns/floatingO.svg";
import FloatBPattern from "@/assets/images/patterns/floatingB.svg";

export const ToolkitSection = () => {
    // States for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // States for checkbox, loading, and feedback messages
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields and checkbox
        if (!name || !email) {
            setError("Please enter your name and email.");
            return;
        }

        if (!isChecked) {
            setError("You must accept to receive emails.");
            return;
        }

        // Reset messages and set loading state
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            // Send POST request to the API
            const response = await fetch("https://services.leadconnectorhq.com/hooks/3GDFzS3jhyf4hSxzBeps/webhook-trigger/63b0681c-09ea-4dd1-83e5-61e83fcb3319", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            });

            if (!response.ok) {
                throw new Error("Something went wrong while sending the data.");
            }

            // On success
            setSuccess(true);
            setName("");
            setEmail("");
            setIsChecked(false);
        } catch (err) {
            // Handle errors
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main id="toolkit">
            <section>
                {/* Free label and icon */}
                <p>
                    ΕΝΤΕΛΩΣ ΔΩΡΕΑΝ
                    <Icons.PraPatternIcon />
                </p>

                {/* Section heading */}
                <h2>
                    Εργαλειοθήκη
                    <span>
                        Ψυχικής Ευεξίας
                        {/* Text pattern image */}
                        <img src={TextPattern} width={230} alt="Pattern" className="ml-auto" />
                    </span>
                </h2>

                {/* Description paragraph */}
                <p>
                    Ενίσχυσε την ψυχική σου υγεία με δωρεάν εργαλεία ψυχικής ευεξίας! Συμπλήρωσε το email σου για να λαμβάνεις <strong>εντελώς ΔΩΡΕΑΝ</strong> eBooks, καθοδηγούμενους διαλογισμούς και πρακτικούς οδηγούς, σχεδιασμένα όλα για να σε υποστηρίζουν καθημερινά.
                </p>

                {/* Form starts here */}
                <form onSubmit={handleSubmit}>
                    {/* Name input */}
                    <input
                        type="text"
                        placeholder="Όνομα"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <div>
                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Submit button */}
                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Τη Θέλω"}
                        </button>
                    </div>
                </form>

                {/* Error & Success messages */}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>Successfully submitted!</p>}

                {/* Checkbox component */}
                <CheckBox
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                >
                    Συμπληρώνοντας τη φόρμα αποδέχομαι να λαμβάνω email από το NousGym και την εταιρία ΚΕΝΤΡΟ ΣΥΜΒΟΥΛΕΥΤΙΚΗΣ & ΨΥΧΟΘΕΡΑΠΕΙΑΣ Σ. ΓΕΩΡΓΙΑΔΗΣ & ΣΙΑ ΕΕ
                </CheckBox>
            </section>

            {/* Toolkit image and animated patterns */}
            <span className="relative">
                <img src={ToolKit} width={580} height={580} alt="ToolKit" />
                <img
                    className="absolute top-0 sm:top-5 left-10 animate-pulse max-sm:w-14"
                    src={FloatOPattern}
                    width={80}
                    height={80}
                    alt="ToolKit Pattern"
                />
                <img
                    className="absolute bottom-0 sm:bottom-10 right-10 animate-pulse max-sm:w-14"
                    src={FloatBPattern}
                    width={80}
                    height={80}
                    alt="ToolKit Pattern"
                />
            </span>
        </main>
    );
};
