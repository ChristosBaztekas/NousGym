import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Icons from '../../utils/icons.util'; // Import all icons

// Function to perform smooth scrolling
const smoothScroll = (target, offset = 0) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duration of the scroll animation in milliseconds
    let startTime = null;

    // Easing function for smooth scrolling
    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    // Animation function
    const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, scrollAmount);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

export const SmoothScrollButton = ({ href, children, color }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.substring(1) : href.split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (location.pathname === '/' && href.startsWith('#')) {
            // If already on the target page and the href starts with '#', just scroll
            if (targetElement) {
                smoothScroll(targetElement);
            }
        } else {
            // Navigate to the target page and scroll once navigation is complete
            navigate(href.startsWith('#') ? `/${href}` : href);
            setTimeout(() => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    smoothScroll(targetElement);
                }
            }, 100); // Delay to ensure the navigation is complete
        }
    };

    return (
        <a href={href} onClick={handleClick} className={`${color} group`}>
            {children}
            <span>
                <Icons.ArrowIcon />
            </span>
        </a>
    );
};

// Prop validation
SmoothScrollButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    color: PropTypes.string
};