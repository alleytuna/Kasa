import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import About from "./pages/About";

import "./index.css";
import HouseDetails from "./pages/HouseDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {/* setting up all the routes/pages existing in this app and the name to access it */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<About />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
