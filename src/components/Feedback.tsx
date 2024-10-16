import React from "react";
import { Footer } from "./Footer";

class Feedback extends React.Component {
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
            src="https://docs.google.com/forms/d/1tAAOSlVmxog5p4uU1T1u7QHs16EkzMq1daHnnQACQXM/viewform?embedded=true"
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

export default Feedback;
