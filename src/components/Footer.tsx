import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <p className="p-3 text-light text-center">
          <small>
            © thetribeexperiment 2023
            <br />
            Contact:{" "}
            <a
              href="mailto:dan@thetribeexperiment.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              dan@thetribeexperiment.com
            </a>{" "}
            <br />
            <a
              href="https://www.instagram.com/thetribehatesinsta"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }} // Add inline style
            >
              <FontAwesomeIcon icon={faInstagram} /> thetribehatesinsta
            </a>
          </small>
        </p>
      </div>
    </>
  );
};
