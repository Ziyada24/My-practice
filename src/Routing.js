import React from 'react'
import { Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";


const PAGES_ROUTES = [
    {
        type: "Home",
        link: "/",
        element: <HomePage/>,
        id: 1,
    },
    {
        link: "/post",
        element: <PostsPage/>,
        id: 2,
    },
    {
        link: "/about",
        element: <AboutPage/>,
        id: 3,
    },
    {
        link: "*",
        element: <NotFoundPage />,
        id: 4,
    },
]

const Routing = () => {
  return (
    <Routes>
        {PAGES_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
        ))}
    </Routes>
  )
} 

export default Routing