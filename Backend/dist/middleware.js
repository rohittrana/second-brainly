"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const jwtSecret = process.env.JWT_PASSWORD;
    if (!jwtSecret) {
        res.status(500).json({ message: "JWT secret not set" });
        return;
    }
    if (!header) {
        res.status(401).json({ message: "No authorization header" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(header, jwtSecret);
        if (typeof decoded === "string") {
            res.status(403).json({ message: "You are not logged in" });
            return;
        }
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        res.status(403).json({ message: "You are not logged in" });
    }
};
exports.userMiddleware = userMiddleware;
