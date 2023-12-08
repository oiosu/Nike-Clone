import React from "react";
import Header from "./components/MainPage/Header";
import MainPage from "./components/MainPage/MainPageC";
import Footer from "./components/MainPage/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventMainPage from "./components/EventPage/EventMainPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/event" element={<EventMainPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;