"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./config"));
const index_1 = __importDefault(require("./routes/index"));
const index_2 = __importDefault(require("./routes/index"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
(0, config_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/api/user', index_1.default);
app.use('/api/user', index_2.default);
app.listen("5000", () => {
    console.log("Server is running here");
});
