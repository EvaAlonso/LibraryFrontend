import { createBrowserRouter, Form } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import BookCardDetailed from "../components/molecules/BookCardDetailed/BookCardDetailed.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/:bookId",
        element: <BookCardDetailed/>
    },
    {
       path: "/admin/Form",
       element: <Form/>    }
])