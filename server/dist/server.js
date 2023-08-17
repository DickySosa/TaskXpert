"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
const db_config_model_1 = require("./db-config.model");
const pg_1 = require("pg");
const client = new pg_1.Client(db_config_model_1.config);
const PORT = 5000;
client.connect(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Connected to the PostgreSQL database');
    }
    catch (error) {
        console.log('Error connecting to the PostgreSQL database', error);
    }
}));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map