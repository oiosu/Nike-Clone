import React from "react";
import Header from "./components/MainPage/Header";
import Nav from "./components/MainPage/Nav";
import NavFooer from "./components/MainPage/NavFooer";
import MainContainer from "./components/MainPage/MainContainer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <NavFooer />
      <MainContainer />
    </div>
  );
}

export default App;
