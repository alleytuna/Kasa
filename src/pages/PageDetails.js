import React from "react";
import Banner from "../components/Banner";
import Houses from "../data/houses.json";
import { useParams } from "react-router-dom";
import { Collapsible } from "../components/Collapsible";
import PageNotFound from "./404";
import "../styles/houseDetails.css";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Tags from "../components/Tags";

export default function PageDetails() {
  let urlId = useParams().id;
  let house = Houses.filter(function (house) {
    return house.id === urlId;
  });

  if (house[0] === undefined) {
    return <PageNotFound />
  }
  // si house null, return PageNotFound

  // - mettre footer en bas
  // - responsive a gerer
  // - commenter le code
  // - rediger page 404 si id existe
  // - relire les consignes
  // - space around not space between pour le home

  const {
    cover,
    title,
    location,
    description,
    equipments,
    rating,
    host,
    tags,
  } = house[0];

  return (
    <main>
      <Banner
        image={cover}
        altText="Paysage avec montagne"
        description=""
        className="BannerDetails"
      />
      <h1 className="Title">{title}</h1>
      <h2 className="Location">{location}</h2>
      <Tags tags={tags} />
      <Host hostName={host.name} hostProfilePicture={host.picture}/>
      <Rating rating={rating}/>
      <div className="AllShortCollapse">
        <Collapsible
          className="Short"
          title="Description"
          content={description}
        />
        <Collapsible
          className="Short"
          title="Equipements"
          content={equipments}
        />
      </div>
    </main>
  );
}
