import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
