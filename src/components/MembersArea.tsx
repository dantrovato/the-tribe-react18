import { useState } from "react";
import { Footer } from "./Footer";
import Gallery from "./Gallery/Gallery";

const eventPassword = "nosquirting";
let password: string | undefined = undefined;

const MembersArea = () => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const passwordInput = event.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    password = passwordInput.value;

    if (password === eventPassword) {
      setHasBeenClicked(true);
      setIsPasswordCorrect(true);
      console.log("password matches");
    } else {
      setHasBeenClicked(false);
      setIsPasswordCorrect(false);
      console.log("password doesn't match");
    }
  };

  return (
    <div className="m-5">
      {!hasBeenClicked && (
        <form className="text-center" onSubmit={(event) => handleSubmit(event)}>
          <h3 className="text-center text-muted">Enter your membership key</h3>
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
            <p className="text-danger mt-2">Nice try, ninja. Try again</p>
          )}
          <button className="btn btn-primary m-5">Enter</button>
        </form>
      )}

      {hasBeenClicked && <Gallery />}
      <Footer />
    </div>
  );
};

export default MembersArea;
