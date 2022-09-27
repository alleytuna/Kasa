import React from "react";
import "../styles/houseDetails.css";

export default function Host({ hostName, hostProfilePicture }) {
  return (
    <section className="HostNameAndPicture">
      <h3 className="HostName">{hostName}</h3>
      <img
        className="ProfilePicture"
        src={hostProfilePicture}
        alt={`${hostName}'s face`}
      />
    </section>
  );
}
