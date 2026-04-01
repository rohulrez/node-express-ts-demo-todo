"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_js_1 = require("./data.js");
const router = express_1.default.Router();
router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = (0, data_js_1.addTodo)(text);
    res.json({ message: 'Todo Added!!!!!!!', addedTodo });
    console.log("BODY:", req.body);
    console.log("TEXT:", req.body?.text);
});
exports.default = router;
