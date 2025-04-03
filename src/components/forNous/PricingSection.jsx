import { useEffect, useState } from "react";

export const PricingSection = () => {
    const [heights, setHeights] = useState([]); // Store valid height values

    useEffect(() => {
        const handleMessage = (event) => {
            const iframe = document.getElementById("pricingIframe");
          
            if (iframe && !isNaN(event.data.height)) {
                const maxHeight = 10000; // Maximum allowed height
                const minHeight = 4000; // Minimum allowed height
                const receivedHeight = Number(event.data.height);

                // Ignore values outside the allowed range
                if (receivedHeight > maxHeight || receivedHeight < minHeight) {
                    console.log("Ignored height:", receivedHeight);
                    return;
                }

                // Add the valid height to the list
                setHeights((prevHeights) => [...prevHeights, receivedHeight]);

                // Calculate the average of valid heights
                const validHeights = [...heights, receivedHeight];
                const averageHeight = validHeights.reduce((sum, h) => sum + h, 0) / validHeights.length;

                // Determine the buffer based on screen width
                const buffer = window.innerWidth < 500 ? 100 : 60;

                // Apply the calculated height
                const newHeight = Math.round(averageHeight) + buffer;
                iframe.style.height = `${newHeight}px`;
            }
        };

        // Add an event listener for messages
        window.addEventListener("message", handleMessage);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("message", handleMessage);
    }, [heights]);

    return (
        <main id="price">
            <iframe id="pricingIframe" src="https://packages.nousgym.gr/packages-page"></iframe>
        </main>
    );
};
