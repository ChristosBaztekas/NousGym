import * as Icons from "../../utils/icons.util" // Import all icons
// Import images
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"

export const WhySection = () => {
	return (
		<main id="why">
			{/* Overlay Patterns for the process section */}
			<img src={TopPattern} alt="Pattern" className="absolute left-0 right-0 top-0 z-10 w-full" />
			<img src={BottomPattern} alt="Pattern" className="absolute left-0 right-0 bottom-0 z-10 w-full" />

			<h3>Γιατί να επιλέξετε τους ψυχολόγους μας;</h3>

			{/* Button with icon */}
			<span>
				<button>Ποιοι είμαστε</button>
				<Icons.ArrowIcon />
			</span>
		</main>
	)
}