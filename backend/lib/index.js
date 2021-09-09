"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const eatery_1 = require("./controllers/eatery");
const cors_1 = require("cors");
const express_1 = require("express");
const mongoose_1 = require("mongoose");
async function run() {
    await mongoose_1.default.connect(process.env.DBURL, {});
}
run().catch(err => console.log(err));
const app = express_1.default();
app.use(cors_1.default({ origin: true }));
app.get('/', async (req, res) => {
    const schools = await eatery_1.GetAll();
    res.json({
        schools
    });
});
exports.addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    res.send(original);
});
//# sourceMappingURL=index.js.map