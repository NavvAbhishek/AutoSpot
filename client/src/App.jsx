import "./App.css";

import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import CentersPage from "./pages/CentersPage";
import CentersFormPage from "./pages/CentersFormPage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";


// Home
import Home from "./components/home/Home";
import Banner from "./components/home/Banner";
import NavBar from "./components/home/NavBar";
import AboutUsPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CenterPage from "./pages/CenterPage";

//import ServicesPage from "./pages/ServicesPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <Banner />
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About Us" element={<AboutUsPage />} />
        <Route path="Blog/" element={<BlogPage />} />
        {/*<Route path="Services" element={<ServicesPage />} />*/}
        <Route path="/explore" element={<Layout />}>
          <Route path="/explore" element={<IndexPage />} />
          <Route path="/explore/login" element={<LoginPage />} />
          <Route path="/explore/register" element={<RegisterPage />} />
          <Route path="/explore/account/" element={<ProfilePage />} />
          <Route path="/explore/account/centers" element={<CentersPage />} />
          <Route
            path="/explore/account/centers/new"
            element={<CentersFormPage />}
          />
          <Route
            path="/explore/account/centers/:id"
            element={<CentersFormPage />}
          />
          <Route path="/explore/account/center/:id" element={<CenterPage />} />
          <Route path="/explore/account/bookings" element={<BookingsPage/>} />
          <Route path="/explore/account/bookings/:id" element={<BookingPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
