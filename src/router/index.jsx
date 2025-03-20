import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import { HomePage } from "../pages/HomePage";
import { WhoPage } from "../pages/WhoPage";
import { NousPage } from "../pages/NousPage";

// Analytics Component
const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname + location.search,
        });
    }, [location]);

    return null;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Analytics />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/who-we" element={<WhoPage />} />
                <Route path="/nous-gym" element={<NousPage />} />
                <Route
                    path="*"
                    element={
                        <h1 className="flex justify-center items-center text-3xl mt-52 text-secondaryColor font-bold">
                            Soon...
                        </h1>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;