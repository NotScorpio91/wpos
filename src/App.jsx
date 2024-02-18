import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, CardForm, NotFoundPage,Profile } from "./index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/card-form" element={<CardForm />} />
        <Route path="/profile" element={<Profile />} />


        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
