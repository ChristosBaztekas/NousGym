import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";

export const WhySection = () => {
	const navigate = useNavigate();

	// Function to handle navigation and scroll to top
	const handleNavigation = (path) => {
		navigate(path);
		window.scrollTo(0, 0);
	};

	// Scroll to top on component mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="why">
			{/* Overlay Patterns for the process section */}
			<img src={TopPattern} alt="Pattern" className="topPattern" />
			<img src={BottomPattern} alt="Pattern" className="bottomPattern" />

			{/* Section Title */}
			<h3>Γιατί να επιλέξετε τους ψυχολόγους μας;</h3>

			{/* Button with icon */}
			<button
				onClick={() => handleNavigation("/who-we")}
				className="group bg-white hover:bg-gray-300 text-[#2B2C2E]"
			>
				Ποιοι είμαστε
				<span>
					<Icons.ArrowIcon />
				</span>
			</button>
		</main>
	);
};