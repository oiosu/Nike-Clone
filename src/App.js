import React from "react";
import Header from "./components/MainPage/Header";
import Nav from "./components/MainPage/Nav";
import NavFooer from "./components/MainPage/NavFooer";
import MainContainer from "./components/MainPage/MainContainer";
import Gift from "./components/MainPage/Gift";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <NavFooer />
      <MainContainer />
      <Gift />
    </div>
  );
}

export default App;
