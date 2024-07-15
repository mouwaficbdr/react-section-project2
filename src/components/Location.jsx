import React from "react"
import locationIcon from "../../public/assets/location-icon.png"

export default function Location(props) {
  return (
    <section className="place">
      <img src={`/assets/${props.item.imageUrl}`} className="place-image" />
      <div className="infos">
        <div className="location">
          <div className="country">
            <img src={locationIcon} />
            <p className="place--country-name">{props.item.location}</p>
          </div>
          <a href={props.item.googleMapsUrl} className="location-link">View on Google Maps</a>
        </div>
        <div className="title">{props.item.title}</div>
        <div className="duration">{props.item.startDate} - {props.item.endDate}</div>
        <div className="description">{props.item.description}</div>
      </div>
    </section>
  );
}