import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Membership from "./components/Membership";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import { Footer } from "./components/Footer";
import { FieldValues } from "react-hook-form";

function App() {
  const handleSubmit = (data: FieldValues) => {
    const { firstName, lastName, email, socialMedia, phoneNumber } = data;
    console.log(data);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/membership"
          element={<Membership onSubmit={handleSubmit} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
