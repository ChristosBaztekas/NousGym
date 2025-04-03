import { useEffect, useState } from "react";

export const PricingSection = () => {
    const [height, setHeight] = useState(null);

    useEffect(() => {
        const handleMessage = (event) => {
            if (isNaN(event.data.height)) return;

            const receivedHeight = Number(event.data.height);

            if (window.innerWidth > 840) {
                setHeight(receivedHeight + 60);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <main id="price">
            <iframe
                id="pricingIframe"
                src="https://packages.nousgym.gr/packages-page"
                style={height ? { height: `${height}px` } : {}}
            ></iframe>
        </main>
    );
};
