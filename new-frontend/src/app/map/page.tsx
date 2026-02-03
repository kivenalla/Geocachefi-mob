"use client";

import "./MapViewPage.scss";
import { FiltersContextProvider } from "@/old/context/FiltersContextProvider";
import dynamic from "next/dynamic";

const MapContainerWrapper = dynamic(
  () => import("@/old/context/MapContainerWrapper").then(mod => mod.MapContainerWrapper),
  { ssr: false }
);

const MapView = dynamic(() => import("@/old/components/MapView"), { ssr: false });

const MapViewPage = () => {
  return (
    <>
      <div className="map-view-page">
        <FiltersContextProvider>
            <MapContainerWrapper>
                <MapView />
            </MapContainerWrapper>
        </FiltersContextProvider>
      </div>
    </>
  );
};

export default MapViewPage;
