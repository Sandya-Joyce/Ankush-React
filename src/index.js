import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div className={classes.container}>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
