import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 13.2593,
    longitude: 76.4786,
    zoom: 11,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/darshandarshu/ckuiapebh32lu17o9qdn0unj0'
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}

export default Map;
