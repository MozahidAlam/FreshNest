--  HarvestLink BD — Backend Server
--  Built with Node.js, Express, MySQL, bcrypt, and JWT
--  Handles user authentication and API endpoints for the FreshNest application

const express   = require('express');
const cors      = require('cors');
const mysql     = require('mysql2/promise');
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ─── MIDDLEWARE ───────────────────────────────────────────
app.use(cors());
app.use(express.json());