import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "leaflet/dist/leaflet.css";

const API_URL = "http://127.0.0.1:3000/data";

const getIntensity = (distance) => {
    if (distance <= 7) return 1.0;  // 🔴 Red (High intensity)
    if (distance <= 15) return 0.7;  // 🟠 Orange
    if (distance <= 30) return 0.3;   // 🟢 Green
    return 0.2;                     // 🔵 Blue (Lowest intensity)
};

const HeatmapLayer = ({ points }) => {
    const map = useMap();
    const layerRef = useRef(null);

    useEffect(() => {
        if (!map || points.length === 0) return;

        // Remove old layer completely
        if (layerRef.current) {
            map.removeLayer(layerRef.current);
            layerRef.current = null;
        }

        // Create new heatmap points with intensity values
        const heatmapPoints = points.map((p) => [p.lat, p.lng, p.intensity]);

        // Create fresh heatmap layer
        layerRef.current = L.heatLayer(heatmapPoints, {
            radius: 40,
            blur: 25,
            maxZoom: 15,
            minOpacity: 0.2,
            max: 1.0,
            gradient: {
                0.0: "blue",
                0.25: "cyan",
                0.5: "lime",
                0.75: "yellow",
                1.0: "red"
            }
        }).addTo(map);

        return () => {
            if (layerRef.current && map.hasLayer(layerRef.current)) {
                map.removeLayer(layerRef.current);
                layerRef.current = null;
            }
        };
    }, [map, points]);

    return null;
};

const DelhiHeatmap = () => {
    const [heatmapData, setHeatmapData] = useState([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchHeatmapData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                // Extract distance value - handle "5.3 | Location..." format
                let distance = 0;
                if (typeof data.distance === 'string') {
                    distance = parseFloat(data.distance.match(/[\d.]+/)[0]);
                } else {
                    distance = parseFloat(data.distance);
                }

                // Guard against NaN
                if (isNaN(distance)) {
                    console.warn("Invalid distance received:", data.distance);
                    return;
                }

                console.log("Distance updated:", distance); // Debug log

                const intensity = getIntensity(distance);

                const newDataPoint = {
                    lat: data.latitude,
                    lng: data.longitude,
                    intensity
                };

                const staticPoints = [
                    { lat: 28.7371, lng: 77.0850, intensity: 1 }, // 🔴 High Intensity
                    { lat: 28.7355, lng: 77.0802, intensity: 0.7 }, // 🔴 High Intensity
                    { lat: 28.7348, lng: 77.0835, intensity: 0.85 }, // 🔴 High Intensity
                    { lat: 28.7365, lng: 77.0840, intensity: 0.2 }, // 🔴 High Intensity
                ];

                // Update with new array reference to ensure re-render
                setHeatmapData([newDataPoint, ...staticPoints]);
            } catch (error) {
                console.error("Error fetching heatmap data:", error);
            }
        };

        fetchHeatmapData(); // Fetch initially

        intervalRef.current = setInterval(fetchHeatmapData, 500); // Fetch every 500ms

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <MapContainer
            center={[28.7361, 77.0825]}
            zoom={19}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <HeatmapLayer points={heatmapData} />
        </MapContainer>
    );
};

export default DelhiHeatmap;
