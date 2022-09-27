import logo from "../assets/LogoBlackWhite.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa black and white logo" />
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
}
