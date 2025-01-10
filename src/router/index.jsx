import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import CreateForm from "../pages/CreateForm/CreateForm.jsx";
import EditForm from "../pages/EditForm/EditForm.jsx";

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
        path: "/admin/create",
        element: <CreateForm />
    },
    {
        path: "/admin/edit",
        element: <EditForm />
    }
])