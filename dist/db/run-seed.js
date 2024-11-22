"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = __importDefault(require("./seed"));
(0, seed_1.default)()
    .then(() => {
    console.log("🌱 Seed successful 🌱");
    process.exit(0);
})
    .catch((e) => {
    console.log("🌱 Seed failed ❌");
    console.error(e);
    process.exit(1);
});
