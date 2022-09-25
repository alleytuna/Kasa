import logo from "../assets/logoBlackWhite.svg";
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="le logo de Kasa en noir et blanc" />
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
}
