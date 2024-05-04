import "../Style/Style.css";
import { useState } from "react";
import Header from "../composent/Header";
import Collection from "../composent/Collection";
import Transition from "../composent/Transition";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Collection />
      <Transition />
    </div>
  );
}
