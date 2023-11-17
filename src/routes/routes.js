import React from "react";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
const pageRoutes = [
    { path: "/", component: <Products /> },
    { path: "/cart", component: <Cart /> },
];
export { pageRoutes };