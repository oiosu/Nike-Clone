import React from "react";
import Header from "./components/MainPage/Header";
import Nav from "./components/MainPage/Nav";
import NavFooer from "./components/MainPage/NavFooer";
import MainContainer from "./components/MainPage/MainContainer";
import Gift from "./components/MainPage/Gift";
import Apparel from "./components/MainPage/Apparel";
import VictoryF from "./components/MainPage/VictoryF";


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <NavFooer />
      <MainContainer />
      <Gift />
      <Apparel />
      <VictoryF />
    </div>
  );
}

export default App;
