import { useEffect } from "react";

export const PricingSection = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = document.getElementById("pricingIframe");
            if (iframe && event.data.height && !isNaN(event.data.height)) {
                iframe.style.height = `${event.data.height + (window.innerWidth < 500 ? 90 : 40)}px`;
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
