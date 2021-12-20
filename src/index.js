import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/reducers/store";

import App from "./App";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

import Dashboard from "./components/Dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./index.module.css";

import AddStatusForm from "./components/Status/AddStatusForm/AddStatusForm";
import StatusList from "./components/Status/StatusList/StatusList";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className={classes.container}>
        <Header />
        <main className="main" id="main">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/add" element={<AddStatusForm />} />
              <Route path="/dashboard/browse" element={<StatusList />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
