import "../styles/home.css"
import "../styles/houseDetails.css"

export default function Banner({ image, altText, description, className }) {
  return (
    <div className="Banner">
      <img src={image} alt={altText} className={className}/>
      <p className="BannerText">{description}</p>
    </div>
  );
}
