import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import store from "./redux/store";

//import components
import Header from "./components/Header";
import HomeRoutes from "./components/pages/HomeRoutes ";

function App() {
  return (
    <>
      <Router>
        <Header />
        <HomeRoutes />
      </Router>
    </>
  );
}

export default App;
