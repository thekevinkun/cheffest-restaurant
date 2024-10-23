"use client"

import React, { useState } from "react";
import { 
  APIProvider, 
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow } from "@vis.gl/react-google-maps";

import "./custommap.css";

const CustomMap = () => {
  const location = {lat: 30.351202773591876, lng: -97.73350755365112}
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div className="map-container">
        <Map
            defaultZoom={13}
            defaultCenter={location}
            gestureHandling={"greedy"}
            mapId={process.env.REACT_APP_MAP_ID}
        >
            <AdvancedMarker position={location} onClick={() => setOpen(true)}>
              <Pin background={"red"} borderColor={"white"} glyphColor={"black"}/>
            </AdvancedMarker>

            {open && 
              <InfoWindow position={location} onCloseClick={() => setOpen(false)}>
                <p>You found our Restaurant!</p>
              </InfoWindow>
            }
        </Map>
        </div>
    </APIProvider>
  );
};

export default CustomMap;
