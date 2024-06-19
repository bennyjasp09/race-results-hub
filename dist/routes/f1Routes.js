"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const f1Controller_1 = require("../controllers/f1Controller");
const router = (0, express_1.Router)();
router.get('/', f1Controller_1.getAllResults);
exports.default = router;
