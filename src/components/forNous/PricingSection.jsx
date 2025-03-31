import { useEffect } from "react";

export const PricingSection = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = document.getElementById("pricingIframe");
            if (iframe && !isNaN(event.data)) {
                if (window.innerWidth < 500) {
                    iframe.style.height = `${event.data + 90}px`;
                } else {
                    iframe.style.height = `${event.data + 40}px`;
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <main id="price">
            <iframe id="pricingIframe" src="https://packages.nousgym.gr/packages-page"></iframe>
        </main>
    );
};