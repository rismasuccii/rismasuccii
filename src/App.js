import React from "react";
import Header from "./component/header";
import About from "./component/About";
import Gallery from "./component/galery";
import Contact from "./component/contact";
import Footer from "./component/footer";
import "./App.css";

function App() {
  const galleryItems = [
    { id: 1, image: "./image/2.jpg", name: "Kopi Arabika" },
    { id: 2, image: "./image/1.jpg", name: "Kopi Robusta" },
    { id: 3, image: "./image/3.jpg", name: "Kopi Luwak" },
    { id: 4, image: "./image/4.jpg", name: "Matcha" },
    { id: 5, image: "./image/5.jpg", name: "Chocolate" }
  ];


  return (
    <div className="App">
      <Header />
      <About />
      <Gallery items={galleryItems} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;