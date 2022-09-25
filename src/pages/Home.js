import React from "react";
import Banner from "../components/Banner";
import BannerHome from "../assets/BannerHome.png";
import Houses from "../data/houses.json";
import HomeArticle from "../components/HomeArticle";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Banner
        image={BannerHome}
        altText="Paysage de montagne"
        description="Chez vous, partout et ailleurs"
        className="BannerHome"
      />
      <article className="ArticlesContainer">
        {Houses.map((house) => {
          return (
            <Link to={`/house/${house.id}`}>
              <HomeArticle
                key={house.id}
                cover={house.cover}
                title={house.title}
              />
            </Link>
          );
        })}
      </article>
    </main>
  );
}
