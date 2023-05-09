import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import { Footer } from "./components/Footer";
import { FieldValues } from "react-hook-form";
import Events from "./components/Events";
import Rules from "./components/Rules";
import GoogleForm from "./components/GoogleForm";

function App() {
  // const handleSubmit = (data: FieldValues) => {
  //   const { firstName, lastName, email, socialMedia, phoneNumber } = data;
  //   console.log(data);
  // };
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Home />} />
        {/* <Route
          path="/membership"
          element={<Membership onSubmit={handleSubmit} />}
        /> */}
        <Route path="/join" element={<GoogleForm />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
