import React from "react";
import Houses from "../data/houses.json";
import { useParams } from "react-router-dom";
import { Collapsible } from "../components/Collapsible";
import PageNotFound from "./404";
import "../styles/houseDetails.css";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Carousel from "../components/Carousel";

export default function HouseDetails() {
  let urlId = useParams().id;
  // filter on the .json file to find the house corresponding to the id sent in the url (and found thanks to useParams)
  let house = Houses.filter(function (house) {
    return house.id === urlId;
  });

  // if house doesn't return at least one element, redirect to error page
  if (house[0] === undefined) {
    return <PageNotFound />;
  }

  // extracting only the elements we'll use in our page
  const {
    title,
    location,
    description,
    pictures,
    equipments,
    rating,
    host,
    tags,
  } = house[0];

  return (
    <main>
      <Carousel pictures={pictures} />
      <section className="AllInfo">
        <div className="HouseInfo">
          <h1 className="Title">{title}</h1>
          <h2 className="Location">{location}</h2>
          <Tags tags={tags} />
        </div>
        <div className="HostInfo">
          <Host hostName={host.name} hostProfilePicture={host.picture} />
          <Rating rating={rating} />
        </div>
      </section>
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
