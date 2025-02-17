import { Header } from "../components/bars/Header";
import HeroPattern from "../assets/images/patterns/heroPattern.png"
export const HomePage = () => {
    return (
        <>
            <main id="hero">
                <Header />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-0 w-full h-full"></div>
                <img src={HeroPattern} alt="Pattern" className="absolute left-0 right-0 -bottom-1 z-10 w-full" />


            </main>
        </>
    );
};