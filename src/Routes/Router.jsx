import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
import Property from "../pages/Property";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import BlogRouter from "./BlogRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
                loader: () => fetch('../../blogs.json')
            },
            {
                path: "/blog/:slug",
                element: <BlogRouter><BlogDetails></BlogDetails></BlogRouter>,
                loader: () => fetch('../../blogs.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: "/property/:id",
                element: <PrivateRouter><Property></Property></PrivateRouter>,
                loader: () => fetch('../../properties.json')
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);
export default router;
