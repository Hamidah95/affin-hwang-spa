import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/SideNavBar/Navbar";
import HomePage from "./pages/Home";
import UserPage from "./pages/User/UserList/UserPage";
import "./App.css";

/**
 * SPA for the webpage
 * @returns
 */
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<UserPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/info" element={<UserPage />} />
          <Route path="/settings" element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}
