import "../styles/home.css";
import "../styles/houseDetails.css";

export default function Banner({ image, altText, description }) {
  return (
    <section className="Banner">
      <img src={image} alt={altText} className="BannerHome" />
      <p className="BannerText">{description}</p>
    </section>
  );
}
