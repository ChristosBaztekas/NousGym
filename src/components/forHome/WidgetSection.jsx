import { useEffect } from "react";

export const WidgetSection = () => {

    useEffect(() => {
        const widget = document.getElementById("widget");
        const script = document.createElement("script");
        script.src = "https://link.argoncrm.com/js/form_embed.js";
        script.async = true;

        if (widget) {
            widget.appendChild(script);
        }

        return () => {
            if (widget) {
                widget.removeChild(script);
            }
        };
    }, []);

    return (
        <main id="widget">
            <iframe
                src="https://link.argoncrm.com/widget/form/dpy82qfJXIe1vejnLHVN"
                id="inline-dpy82qfJXIe1vejnLHVN"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="ΕΠΙΚΟΙΝΩΝΙΑ NousGym"
                data-height="738"
                data-layout-iframe-id="inline-dpy82qfJXIe1vejnLHVN"
                data-form-id="dpy82qfJXIe1vejnLHVN"
                title="ΕΠΙΚΟΙΝΩΝΙΑ NousGym"
            ></iframe>
        </main>
    );
};