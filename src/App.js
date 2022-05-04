import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar, Footer } from "./components/Index";
import { HomePage, AboutPage, ErrorPage } from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
