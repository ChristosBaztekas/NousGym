import PropTypes from 'prop-types';
import "../../styles/custom.css"; // Import custom styles

export const CheckBox = ({ children, checked, onChange }) => {
	return (
		<div className="flex gap-2 items-center text-xs text-[#00000096] px-2">
			{/* Checkbox wrapper */}
			<div className="checkbox-wrapper-12">
				<div className="cbx">
					{/* Checkbox input (controlled with checked and onChange) */}
					<input
						id="cbx-12"
						type="checkbox"
						checked={checked}
						onChange={onChange}
					/>
					<label htmlFor="cbx-12"></label>

					{/* SVG for the checkmark */}
					<svg width="15" height="14" viewBox="0 0 15 14" fill="none">
						<path d="M2 8.36364L6.23077 12L13 2"></path>
					</svg>
				</div>

				{/* SVG filter for gooey effect */}
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="goo-12">
							<fegaussianblur
								in="SourceGraphic"
								stdDeviation="4"
								result="blur"
							></fegaussianblur>
							<fecolormatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  
										0 1 0 0 0  
										0 0 1 0 0  
										0 0 0 22 -7"
								result="goo-12"
							></fecolormatrix>
							<feblend in="SourceGraphic" in2="goo-12"></feblend>
						</filter>
					</defs>
				</svg>
			</div>

			{/* Children elements */}
			{children}
		</div>
	);
};

// Prop validation
CheckBox.propTypes = {
	children: PropTypes.node.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};