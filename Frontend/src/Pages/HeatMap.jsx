import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "leaflet/dist/leaflet.css";

const API_URL = "http://127.0.0.1:3000/data";

const getIntensity = (distance) => {
    if (distance < 15) return 1.0;  // 🔴 Red (High intensity)
    if (distance < 10) return 0.7;  // 🟠 Orange
    if (distance < 5) return 0.3;   // 🟢 Green
    return 0.2;                     // 🔵 Blue (Lowest intensity)
};

const HeatmapLayer = ({ points }) => {
    const map = useMap();
    const layerRef = useRef(null);

    useEffect(() => {
        if (!map || points.length === 0) return;

        if (layerRef.current) {
            map.removeLayer(layerRef.current);
        }

        const heatmapPoints = points.map((p) => [p.lat, p.lng, p.intensity]);

        layerRef.current = L.heatLayer(heatmapPoints, {
            radius: 30,
            blur: 20,
            maxZoom: 10,
            minOpacity: 0.3,
            gradient: {
                0.2: "blue",
                0.4: "green",
                0.7: "orange",
                1.0: "red"
            }
        }).addTo(map);

        return () => {
            if (layerRef.current) {
                map.removeLayer(layerRef.current);
            }
        };
    }, [map, points]); // Re-run effect when `points` change

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

                const distance = parseFloat(data.distance.split(" ")[0]); // Extract distance value
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

                setHeatmapData([newDataPoint, ...staticPoints]); // Keep real-time + static points
            } catch (error) {
                console.error("Error fetching heatmap data:", error);
            }
        };

        fetchHeatmapData(); // Fetch initially

        intervalRef.current = setInterval(fetchHeatmapData, 500); // Fetch every 500ms

        return () => clearInterval(intervalRef.current); // Cleanup interval
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
