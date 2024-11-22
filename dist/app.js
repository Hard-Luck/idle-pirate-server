"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
require("./auth/passport");
const passport_2 = require("./auth/passport");
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get("/auth/discord", passport_1.default.authenticate("discord"));
app.get("/auth/discord/callback", passport_1.default.authenticate("discord", { failureRedirect: "/" }), (req, res) => {
    res.redirect("/");
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(passport_2.ensureAuthenticated);
app.get("/protected", (req, res) => {
    res.send("Protected route");
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error occurred:", err);
    res.status(500).send("An error occurred");
});
exports.default = app;
