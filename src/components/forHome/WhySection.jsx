import * as Icons from "../../utils/icons.util" // Import all icons
// Import images
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"

export const WhySection = () => {
	return (
		<main id="why">
			{/* Overlay Patterns for the process section */}
			<img src={TopPattern} alt="Pattern" className="topPattern" />
			<img src={BottomPattern} alt="Pattern" className="bottomPattern" />

			<h3>Γιατί να επιλέξετε τους ψυχολόγους μας;</h3>

			{/* Button with icon */}
			<span>
				<button>Ποιοι είμαστε</button>
				<Icons.ArrowIcon />
			</span>
		</main>
	)
}