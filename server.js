const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

  server.use(express.json()); // to support JSON-encoded bodies
  server.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

  server.all('*', (req, res) => {
    console.log("Request URL:", req.url);
    // console.log("Request Method:", req.method);
    // console.log("Request Headers:", req.headers);
    // console.log("Request Body:", req.body);
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});
