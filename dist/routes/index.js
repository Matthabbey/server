"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const router = express_1.default.Router();
router.post('/register', controller_1.RegisterUser);
router.get('/login', controller_1.LoginUser);
router.put('/:id', controller_1.UpdateUser);
router.delete('/:id', controller_1.DeleteUser);
router.get('/:id', controller_1.GetUser);
exports.default = router;
