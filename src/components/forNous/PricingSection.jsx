import { useEffect } from "react";

export const PricingSection = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = document.getElementById("pricingIframe");
            if (iframe && !isNaN(event.data)) {
                iframe.style.height = `${event.data}px`;
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