import { useState } from "react";
import ArrowRight from "../assets/ArrowRight.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";
import "../styles/carousel.css";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  function nextPicture() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevPicture() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  let indexPicture = current + 1;

  // if there is more than one picture, display arrows
  if (pictures.length > 1) {
    return (
      <section>
        <div>
          <img
            src={ArrowLeft}
            className="ArrowLeft"
            alt="Arrow icon to click left in a carousel"
            onClick={prevPicture}
          />
          <img
            src={ArrowRight}
            className="ArrowRight"
            alt="Arrow icon to click right in a carousel"
            onClick={nextPicture}
          />
        </div>
        {pictures.map((picture, index) => {
          return (
            <div key={index}>
              {index === current && (
                <img
                  className="CarouselPicture"
                  src={picture}
                  alt="Pictures of the apartment selected"
                />
              )}
              <div className="IndexAndLength">
                {indexPicture}/{pictures.length}
              </div>
            </div>
          );
        })}
      </section>
    );
  }

  // otherwise, it only displays the only picture without arrows
  else {
    return (
      <section>
        <img
          className="CarouselPicture"
          src={pictures}
          alt="Pictures of the apartment selected"
        />
        <div className="IndexAndLength">1/1</div>
      </section>
    );
  }
}

export default Carousel;
