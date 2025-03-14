import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Events from "./components/Events";
import Rules from "./components/Rules";
import GoogleForm from "./components/GoogleForm";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
// import TribeNews from "./components/TribeNews";
import HowAreWeDifferent from "./components/HowAreWeDifferent";
// import Articles from "./components/Articles";
import Gallery from "./components/Gallery/Gallery";
import Feedback from "./components/Feedback";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<GoogleForm />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* <Route path="/members" element={<MembersArea />} /> */}

          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/how_are_we_different?"
            element={<HowAreWeDifferent />}
          />
          {/* <Route path="/articles" element={<Articles />} /> */}
          {/* <Route path="/tribe_news" element={<TribeNews />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
