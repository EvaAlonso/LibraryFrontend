import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Dashboard from "../pages/Admin/Dashboard.jsx";
import BookCardDetailed from "../components/molecules/BookCardDetailed/BookCardDetailed.jsx";

export const router = createBrowserRouter([
    {
        path: "/admin/dashboard",
        element: <Dashboard />
    }
    // {
    //     path: "/dashboard",
    //     element: <Layout />,
    //     children: [
    //         {
    //             path: "new-book",
    //             element: <CreateBook />
    //         },
    //         {
    //             path: "books",
    //             element: <GetBooks />
    //         }
    //     ]
    // },
    // {
    //     path: "/app",
    //     element: <LayoutUser />, 
    //     children: [
     
    //         {
    //             path: "books",
    //             element: <ProductListView />, 
    //         }
    //     ]
    // }
])