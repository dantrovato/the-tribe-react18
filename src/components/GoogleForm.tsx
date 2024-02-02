import React from "react";
import { Footer } from "./Footer";

class GoogleForm extends React.Component {
  render() {
    const backgroundImage = {
      backgroundImage: 'url("/two_girls_one_guy.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    };

    return (
      <div style={backgroundImage}>
        <div className="d-flex justify-content-center">
          <iframe
            className="text-center"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdO6YkMwKnIFKdD-KBIL80NGwRfVyO5ybjrlmSTZFGp8U3EnQ/viewform?embedded=true"
            width="640"
            height="1082"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GoogleForm;
