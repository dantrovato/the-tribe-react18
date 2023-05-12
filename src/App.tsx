import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Events from "./components/Events";
import Rules from "./components/Rules";
import GoogleForm from "./components/GoogleForm";
import MembersArea from "./components/MembersArea";
import May_20_2023 from "./components/Events/May_20_2023";
import Testimonials from "./components/Testimonials";

function App() {
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
        <Route path="/members" element={<MembersArea />} />
        <Route path="/may_20_2023" element={<May_20_2023 />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
