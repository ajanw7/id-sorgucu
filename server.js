const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let ips = [];

/* IP KAYDET */
app.post("/save-ip", (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const time = new Date().toLocaleString();

    ips.push(ip + " - " + time);
    res.sendStatus(200);
});

/* IP LİSTELE */
app.get("/get-ips", (req, res) => {
    res.json(ips);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server çalışıyor"));