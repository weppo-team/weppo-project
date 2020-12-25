import express from 'express';
const app = express();

import findConfig from 'find-config';
import dotenv from 'dotenv';
dotenv.config({ path: findConfig('.env') });

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import connection from '../backend/database/connection.js';
connection().catch(console.error);

// serve the react app files
app.use(express.static(`${__dirname}/../frontend/build`));

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello world' });
});

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
