import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import CentersPage from "./pages/CentersPage";
import CentersFormPage from "./pages/CentersFormPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
 
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/" element={<ProfilePage />} />
          <Route path="/account/centers" element={<CentersPage />} />
          <Route path="/account/centers/new" element={<CentersFormPage/>} />
          <Route path="/account/centers/:id" element={<CentersFormPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
