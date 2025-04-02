import { useEffect } from "react";

export const PricingSection = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = document.getElementById("pricingIframe");
            if (iframe && !isNaN(event.data)) {
                const newHeight = event.data + 30;
                if (iframe.style.height !== `${newHeight}px`) {
                    iframe.style.height = `${newHeight}px`;
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
