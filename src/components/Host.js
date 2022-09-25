import React from "react";
import "../styles/houseDetails.css";

export default function Host({ hostName, hostProfilePicture }) {
  return (
    <div>
      <img className="ProfilePicture" src={hostProfilePicture} alt={`${hostName}`} />
      <h3 className="HostName">{hostName}</h3>
    </div>
  );
}
