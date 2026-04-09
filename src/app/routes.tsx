import React from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CategoryPage } from "./components/CategoryPage";
import { ProductPage } from "./components/ProductPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "category/:id", Component: CategoryPage },
      { path: "product/:id", Component: ProductPage },
      { path: "contact", Component: ContactPage },
      { 
        path: "*", 
        Component: () => (
          <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-zinc-900 mb-6">Page Not Found</h2>
            <a href="/" className="text-sm font-bold tracking-widest uppercase border-b border-zinc-900 pb-1">
              Return Home
            </a>
          </div>
        )
      },
    ],
  },
]);
