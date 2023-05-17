import { useState } from "react";
import { Footer } from "./Footer";

const eventPassword = "nosquirting";
let password: string | undefined = undefined;

const MembersArea = () => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const passwordInput = event.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    password = passwordInput.value;

    if (password === eventPassword) {
      setIsPasswordCorrect(true);
      console.log("password matches");
    } else {
      setIsPasswordCorrect(false);
      console.log("password doesn't match");
    }
  };

  return (
    <div className="m-5">
      <h3 className="text-center text-muted">
        Enter password for this event. This is in the description of the what's
        app group for this event
      </h3>
      <form className="text-center" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="password" className="form-label text-muted m-3">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="form-control mx-auto"
          style={{ maxWidth: "400px" }}
        />
        {isPasswordCorrect ? (
          ""
        ) : (
          <p className="text-danger mt-3">Incorrect Password</p>
        )}
        <button className="btn btn-primary m-5">Enter</button>
      </form>
      <Footer />
    </div>
  );
};

export default MembersArea;
