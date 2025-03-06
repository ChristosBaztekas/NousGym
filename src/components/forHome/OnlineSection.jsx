import * as Icons from "../../utils/icons.util"; // Import all icons
import NousOnline from "@/assets/images/forHome/nousOnline.webp"; // Import the logo image

// List of services
const services = [
	"2 Ομαδικές συνεδρίες/μήνα (ΜΕ ΨΥΧΟΛΟΓΟ)",
	"Επικοινωνία με επαγγελματίες Ψυχικής Υγείας",
	"Εβδομαδιαίο Live",
	"Αποκλειστικό Περιεχόμενο",
	"Ομαδικές ανάπτυξης"
];

export const OnlineSection = () => {
	return (
		<main id="online">
			<div>
				{/* Title And Description */}
				<h2>Ψυχική Άσκηση Online</h2>
				<p>
					Το nousgym+ είναι το πρώτο γυμναστήριο ψυχικής και πνευματικής ενδυνάμωσης/άσκησης στην Ελλάδα. Εδώ, ψυχολόγοι και ειδικοί ψυχικής υγείας ενώνουν δυνάμεις, προσφέροντάς σου έναν χώρο όπου νους και ψυχή γυμνάζονται μαζί. Ουσιαστικά, όπως επιλέγεις ένα γυμναστήριο για να γυμνάσεις το σώμα σου, έτσι έχεις την επιλογή πλέον να κάνεις το ίδιο για τον εσωτερικό σου κόσμο. Τι περιλαμβάνει η μηνιαία συνδρομή:
				</p>

				{/* List of services */}
				<ul>
					{services.map((service, index) => (
						<li key={index}>
							<Icons.CheckIcon />
							{service}
						</li>
					))}
				</ul>

				{/* Button with icon */}
				<button className="group bg-[#FF9245] hover:bg-[#469BAF] text-white">
					Περισσότερα
					<span>
						<Icons.ArrowIcon />
					</span>
				</button>
			</div>

			{/* Logo image */}
			<div>
				<img src={NousOnline} alt="NousGym Logo" width={520} height={460} />
			</div>
		</main>
	)
}