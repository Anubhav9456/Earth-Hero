const express = require("express");
const cors = require("cors");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const axios = require("axios");
const http = require("http");

const PORT = 3000;
const ARDUINO_PORT = "COM3"; 
const BAUD_RATE = 9600;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


let latestDistance = "No data received yet";
const ROHINI_LAT = 28.7361;
const ROHINI_LON = 77.0825;

app.post("/data", (req, res) => {
    try {
        const { distance, latitude, longitude } = req.body;
        if (!distance || !latitude || !longitude) {
            return res.status(400).json({ status: "error", message: "Incomplete data received" });
        }

        latestDistance = `${distance} | Location: (${latitude}, ${longitude})`;
        console.log(`📩 Received Distance: ${latestDistance}`);


        res.status(200).json({
            status: "success",
            distance,
            latitude,
            longitude,
        });
    } catch (error) {
        console.error(`❌ Server Error: ${error.message}`);
        res.status(500).json({ status: "error", message: error.message });
    }
});

app.get("/data", (req, res) => {
    res.json({
        status: "success",
        distance: latestDistance,
        latitude: ROHINI_LAT,
        longitude: ROHINI_LON,
    });
});

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "Server is running",
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});

function readSerialData() {
    try {
        const serialPort = new SerialPort({ path: ARDUINO_PORT, baudRate: BAUD_RATE });
        const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

        serialPort.on("open", () => {
            console.log(`🔌 Connected to Arduino on ${ARDUINO_PORT} at ${BAUD_RATE} baud`);
        });

        parser.on("data", async (data) => {
            data = data.trim();
            if (!data) return;

            latestDistance = `${data} | Location: (${ROHINI_LAT}, ${ROHINI_LON})`;
            console.log(`📡 Sending Distance: ${latestDistance}`);

            try {
                const response = await axios.post("http://127.0.0.1:3000/data", {
                    distance: data,
                    latitude: ROHINI_LAT,
                    longitude: ROHINI_LON,
                });

                console.log(`✅ Server Response: ${response.data.status}`);
            } catch (httpError) {
                console.error(`❌ HTTP Request Error: ${httpError.message}`);
            }
        });

        serialPort.on("error", (err) => {
            console.error(`❌ Serial Port Error: ${err.message}`);
            setTimeout(readSerialData, 5000);
        });
    } catch (error) {
        console.error(`⚠ Error Opening Serial Port: ${error.message}`);
        setTimeout(readSerialData, 5000);
    }
}

readSerialData();
