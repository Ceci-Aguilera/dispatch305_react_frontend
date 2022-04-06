import React from "react";
import ReactDOM from "react-dom";

// Fonts
import './assets/fonts/Arial/Arial.ttf';
import './assets/fonts/Arial/Arial Bold.ttf';
import './assets/fonts/DIN Alternate/DIN Alternate Bold.ttf';
import './assets/fonts/DIN Condensed/DIN Condensed Bold.ttf';
import './assets/fonts/Futura/Futura.ttc';
import './assets/fonts/MyriadPro/MyriadPro-Regular.otf';

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Landing from "./pages/index";
import CreateAccount from "./pages/create-account";
import UserAccountInfo from "./pages/user-account";
import Service from "./pages/service";
import Logout from "./pages/logout";
import ResetPasswordComponent from "./components/ResetPasswordComponent"
import SendRequestResetPasswordComponent from "./pages/send-reset-password"

// Import Components
import Layout from "./components/Layout";

// Import Context
import {MenuProvider} from "./context/MenuContext"
import {AuthProvider} from "./context/AuthContext"


const rootElement = document.getElementById("root");
render(
  <Router>
    <AuthProvider>
  <MenuProvider>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/user-account" element={<UserAccountInfo />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route path="reset-password/:uid/:token" element={<ResetPasswordComponent />} />
        <Route path="send-reset-password-request" element={<SendRequestResetPasswordComponent />} />
      </Routes>
    </Layout>
    </MenuProvider>
  </AuthProvider>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
