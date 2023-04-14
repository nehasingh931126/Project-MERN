import React from "react";
import PlaceList from "../components/PlaceList";

const PLACES = [
  {
    id: "p1",
    address: "20 W 34th St, New York, NY 10001",
    imageUrl:
      "https://images.pexels.com/photos/15948114/pexels-photo-15948114.jpeg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
  {
    id: "p1",
    address: "20 W 34th St, New York, NY 10001",
    imageUrl:
      "https://images.pexels.com/photos/15948114/pexels-photo-15948114.jpeg",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
];

const UserPlaces = ()=> {
    

    return <PlaceList items={PLACES} />;
}

export default UserPlaces