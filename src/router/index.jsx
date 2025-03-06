import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { WhoPage } from "../pages/WhoPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/who-we",
        element: <WhoPage />,
    },

    // Route for not existing urls
    {
        path: "/*",
        element: <h1 className="flex justify-center items-center text-3xl mt-52 text-secondaryColor font-bold">Soon...</h1>,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;