import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"

export const AppointmentSection = () => {
    return (
        <main id="appointment">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="absolute left-0 right-0 top-0 z-10 w-full" />
            <img src={BottomPattern} alt="Pattern" className="absolute left-0 right-0 bottom-0 z-10 w-full" />

            <iframe src="https://api.leadconnectorhq.com/widget/booking/S7HBp6onNdnxRMEzNK3L" title="Appointment" width="90%" height="100%" frameBorder="0"></iframe>
        </main>
    )
}