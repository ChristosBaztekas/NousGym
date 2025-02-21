import NousOnline from "../../assets/images/forHome/nousOnline.png"; // Import the logo image
import * as Icons from "../../utils/icons.util"; // Import all icons

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
					<li>
						<Icons.CheckIcon />
						2 Ομαδικές συνεδρίες/μήνα (ΜΕ ΨΥΧΟΛΟΓΟ)
					</li>

					<li>
						<Icons.CheckIcon />
						Επικοινωνία με επαγγελματίες Ψυχικής Υγείας
					</li>

					<li>
						<Icons.CheckIcon />
						Εβδομαδιαίο Live
					</li>

					<li>
						<Icons.CheckIcon />
						Αποκλειστικό Περιεχόμενο
					</li>

					<li>
						<Icons.CheckIcon />
						Ομαδικές ανάπτυξης
					</li>
				</ul>

				{/* Button with icon */}
				<span>
					<button>Περισσότερα</button>
					<Icons.ArrowIcon />
				</span>
			</div>

			{/* Logo image */}
			<img src={NousOnline} alt="NousGym Logo" width={551} height={491} />
		</main>
	)
}
