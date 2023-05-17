import "./Gallery.module.css";

const images = [
  { src: "../tribe1.jpg", alt: "fava" },
  { src: "../tribe2.jpg", alt: "fava" },
];

const Gallery = () => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-md-4">
          <img
            src={image.src}
            alt={image.alt}
            className="img-fluid gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
