import { useEffect } from "react";

const useSmoothScroll = () => {
    useEffect(() => {
        const handleClick = (e) => {
            const href = e.currentTarget.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (!targetElement) {
                console.warn(`Element with id="${targetId}" not found.`);
                return;
            }

            smoothScroll(targetElement);
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => anchor.addEventListener("click", handleClick));

        return () => {
            anchors.forEach(anchor => anchor.removeEventListener("click", handleClick));
        };
    }, []);
};

const smoothScroll = (target, offset = 0) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

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

export default useSmoothScroll;