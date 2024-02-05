import { Footer } from "./Footer";

const Articles = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-muted mb-4">Click on links below</h1>
      <div className="d-flex flex-column align-items-center">
        <a
          className="navbar-brand text-muted text-center mb-5"
          href="https://medium.com/@dantrovato/choking-the-gooch-c4ae28227ac7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="mb-0">Choking the Gooch</h4>
          <h6 className="mt-0">A guide to male multiple orgasms</h6>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
