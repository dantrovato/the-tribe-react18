import React from "react";

class GoogleForm extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdO6YkMwKnIFKdD-KBIL80NGwRfVyO5ybjrlmSTZFGp8U3EnQ/viewform?embedded=true"
          width="640"
          height="1082"
          // frameBorder="0"
          // marginHeight="0"
          // marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default GoogleForm;
