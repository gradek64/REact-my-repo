import React, { useState } from "react";
import Loadable from "react-loadable";

//this is syntax from loadable for dynamic load component
const MapComponent = Loadable({
  loader: () =>
    import(/* webpackChunkName: "mapComponent"*/ "./MapComponentMock"),
  loading: () => <h3>Loading...</h3>,
});

export const GuestCheckoutContainer = () => {
  const [mapLoaded, loadMap] = useState(false);

  return (
    <>
      <h4> {"This is preload webpack chunk loaded"} </h4>
      {mapLoaded && <MapComponent />}
      {!mapLoaded && (
        <button onClick={() => loadMap(true)}>load map on click</button>
      )}
    </>
  );
};

export default GuestCheckoutContainer;
