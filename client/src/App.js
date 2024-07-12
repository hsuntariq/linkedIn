import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "./pages/Article";
import People from "./pages/People";
import Learning from "./pages/Learning";
import Jobs from "./pages/Jobs";
import Games from "./pages/Games";
import "./globals.css";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/article" element={<Article />} />
          <Route path="/people" element={<People />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/games" element={<Games />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
