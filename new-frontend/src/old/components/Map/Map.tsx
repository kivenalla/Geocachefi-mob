"use client"
import { Icon, PointExpression } from "leaflet";
import { Marker, TileLayer, useMap } from "react-leaflet";
import { GeoCacheMapIconUrls, GeocacheMapDetails, defaultMapIconUrl } from "../../model/Geocache";
import { useCallback, useEffect, useState } from "react";
import GeocacheModal from "../GeocacheModal";
import L from "leaflet";
import "./Map.scss";

const MAP_ICON_DIMENSIONS = [36 / 1.5, 27 / 1.5];
const locationIcon = new L.DivIcon({ className: "location-icon", iconSize: [20, 20] });

interface Props {
    geocaches: Array<GeocacheMapDetails>
}

const Map = ({ geocaches }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentCacheId, setCurrentCacheId] = useState<string | null>(null);
    const [userPos, setUserPos] = useState<GeolocationPosition | null>(null);
    const [mapInstance, setMapInstance] = useState(null);

    const registerMap = (map) => {
        setMapInstance(map);
    };

    const updateUserPos = useCallback((newPos: GeolocationPosition) => {
        setUserPos(newPos);
    }, []);

    useEffect(() => {
        navigator.geolocation.watchPosition(updateUserPos, null, {
            enableHighAccuracy: true,
            timeout: 20000
        });
    }, [updateUserPos]);

    const toggle = () => setIsOpen(!isOpen);

    const handleOnClick = (cacheId: string) => {
        setCurrentCacheId(cacheId);
    };

    const drawDistance = (cacheCoords) => {
        if (!mapInstance || !userPos) return;

        const userLatLng = L.latLng(
            userPos.coords.latitude,
            userPos.coords.longitude
        );

        const cacheLatLng = L.latLng(
            cacheCoords.lat,
            cacheCoords.lng
        );

        const line = L.polyline([userLatLng, cacheLatLng], { color: "red" })
            .addTo(mapInstance);

        const distanceMeters = userLatLng.distanceTo(cacheLatLng);

        let distanceText = "";
        if (distanceMeters < 1000) {
            distanceText = `${Math.round(distanceMeters)} m`;
        } else {
            const distanceKm = (distanceMeters / 1000).toFixed(2);
            distanceText = `${distanceKm} km`;
        }

        const midLat = (userLatLng.lat + cacheLatLng.lat) / 2;
        const midLng = (userLatLng.lng + cacheLatLng.lng) / 2;

        const marker = L.marker([midLat, midLng], {
            icon: L.divIcon({
                className: "distance-label",
                html: `<div class="distance-label-inner">${distanceText}</div>`
            }),
            interactive: true
        }).addTo(mapInstance);

        line.on("click", () => {
            mapInstance.removeLayer(line);
            mapInstance.removeLayer(marker);
        });

        marker.on("click", () => {
            mapInstance.removeLayer(line);
            mapInstance.removeLayer(marker);
        });
    };




    return (
        <>
            <MapController registerMap={registerMap} />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {geocaches.map((cache) => (
                <Marker
                    key={cache.referenceCode}
                    position={[
                        cache.postedCoordinates.latitude,
                        cache.postedCoordinates.longitude
                    ]}
                    icon={
                        new Icon({
                            iconUrl: GeoCacheMapIconUrls[cache.type] || defaultMapIconUrl,
                            iconSize: MAP_ICON_DIMENSIONS as PointExpression
                        })
                    }
                    eventHandlers={{
                        click: () => {
                            handleOnClick(cache.referenceCode);
                            toggle();
                        },
                    }}
                />
            ))}

            <GeocacheModal
                isOpen={isOpen}
                toggle={toggle}
                cacheId={currentCacheId}
                drawDistance={drawDistance}
            />

            {userPos && (
                <Marker
                    position={[
                        userPos.coords.latitude,
                        userPos.coords.longitude
                    ]}
                    icon={locationIcon}
                    zIndexOffset={10}
                />
            )}
        </>
    );
};

const MapController = ({ registerMap }) => {
    const map = useMap();
    useEffect(() => {
        registerMap(map);
    }, [map]);
    return null;
};

export default Map;
