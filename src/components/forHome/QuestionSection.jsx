import { useState } from "react";
import { SmoothScrollButton } from "../";
import * as Icons from '../../utils/icons.util'; // Import all icons

// Array of questions and answers
const questions = [
    {
        question: "Είναι οι συνεδρίες εξίσου αποτελεσματικές online όσο και δια ζώσης;",
        answer: "Ναι, οι online συνεδρίες μπορεί να είναι εξίσου αποτελεσματικές, εάν υπάρχουν οι κατάλληλες συνθήκες! Για αυτό οι ψυχολόγοι μας είναι εκπαιδευμένοι να αξιοποιούν πλήρως τα πλεονεκτήματα της τεχνολογίας, προσφέροντας υποστήριξη που δεν χάνει τη δύναμη της ανθρώπινης επαφής. Επίσης, η εξ αποστάσεως θεραπεία σου επιτρέπει να μιλήσεις άνετα από τον χώρο σου, εξοικονομώντας χρόνο και χωρίς γεωγραφικούς περιορισμούς. Έρευνες έχουν δείξει μάλιστα ότι οι online συνεδρίες μπορούν να είναι το ίδιο αποτελεσματικές, ειδικά όταν η επικοινωνία βρίσκεται σε καλό επίπεδο και φυσικά γίνεται με εξειδικευμένους επαγγελματίες."
    },
    {
        question: "Πώς μπορώ να ξέρω ότι ο ψυχολόγος που θα επιλέξω είναι ο κατάλληλος για μένα;",
        answer: "Η διαδικασία εύρεσης ψυχολόγου που θα ταιριάξει στις ανάγκες σου είναι μια δύσκολη διαδικασία. Για αυτό όμως είμαστε εμείς εδώ. Δεδομένου όλων των στοιχείων που θα μας δώσεις, θα είμαστε σε θέση να σε κατευθύνουμε με τον καλύτερο δυνατό τρόπο ώστε να βρεις τον ψυχολόγο με την ειδίκευση και γνώση που σου ταιριάζει και ο/η οποίος/α θα σε βοηθήσει στο έπακρο σε αυτήν τη διαδικασία. Φυσικά, τεράστια επιρροή στη θεραπευτική σχέση έχει και η επικοινωνία και η προσωπική επαφή, για αυτό διάβασε την ερώτηση 'Μπορώ να αλλάξω ψυχολόγο αν νιώσω ότι δεν ταιριάζουμε;'"
    },
    {
        question: "Μπορώ να αλλάξω ψυχολόγο αν νιώσω ότι δεν ταιριάζουμε;",
        answer: "Καταλαβαίνουμε ότι η σύνδεση ανάμεσα σε εσένα και τον ψυχολόγο σου είναι το κλειδί για την επιτυχία της θεραπείας. Αν αισθανθείς ότι για τον οποιονδήποτε λόγο δεν ταιριάζετε, απλά ενημέρωσέ μας. Θα ακούσουμε τις ανησυχίες σου και θα σου προτείνουμε έναν άλλο επαγγελματία από την ομάδα μας, που μπορεί να σου ταιριάζει καλύτερα. Στο NousGym, η ευελιξία και η προσαρμογή στις ανάγκες σου είναι βασικές μας προτεραιότητες. Στόχος μας είναι να αισθάνεσαι ότι έχεις τη σωστή στήριξη, κάθε στιγμή."
    },
    {
        question: "Ποια είναι η διαδικασία για να ξεκινήσω; Είναι περίπλοκο;",
        answer: "Η διαδικασία για να ξεκινήσεις τις συνεδρίες είναι απλή και προσιτή, σχεδιασμένη για να σου προσφέρει σιγουριά και ευκολία από την πρώτη στιγμή. Ξεκινάς κλείνοντας μια δωρεάν αναγνωριστική κλήση μέσα από την πλατφόρμα/σάιτ μας. Στη συνέχεια, ένας συνεργάτης μας επικοινωνεί μαζί σου για να κατανοήσει καλύτερα τις ανάγκες σου και να διασφαλίσει ότι θα λάβεις τη στήριξη που χρειάζεσαι. Αφού έχουμε όλα τα απαραίτητα στοιχεία και έχει γίνει μια πρώτη αξιολόγηση από την πρώτη επικοινωνία, σε συνδέουμε με τον ψυχολόγο της ομάδας μας που ταιριάζει καλύτερα στο προφίλ και τις ανάγκες σου και τόσο άμεσα και εύκολα ξεκινάς τις συνεδρίες σου, με έναν επαγγελματία που είναι ικανός να σε στηρίξει έχοντας ως γνώμονα την κατανόηση αλλά και εξειδίκευση που χρειάζεσαι.Όλα γίνονται με στόχο να σου προσφέρουμε την καλύτερη δυνατή εμπειρία από την πρώτη κιόλας στιγμή."
    }
];

export const QuestionSection = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    // Function to toggle the active question
    const toggleQuestion = (index) => {
        setActiveQuestion(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <main id="faq">
            <section>
                {/* Title */}
                <h2>Συχνές Ερωτήσεις</h2>
                {/* Button with icon */}
                <SmoothScrollButton href="#appointment" color="bg-[#FF9245] hover:bg-[#469BAF] mt-5 text-white">
                    Βρες τον Ψυχολόγο σου
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </SmoothScrollButton>
            </section>

            <section>
                {questions.map((item, index) => (
                    <article key={index}>
                        <div onClick={() => toggleQuestion(index)}>
                            <span>{item.question}</span>
                            <span>{activeQuestion === index ? '–' : '+'}</span>
                        </div>
                        <p className={`${activeQuestion === index ? 'xl:max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {item.answer}
                        </p>
                    </article>
                ))}
            </section>
        </main>
    );
};