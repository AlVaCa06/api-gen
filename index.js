require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { initSocket } = require('./socket');
//const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require("path");

const app = express();
const env = process.env.NODE_ENV || 'development';

const HTTP_PORT = 5666;
const HTTPS_PORT = 5667;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use('/api/v1', routes);

app.get('/api/v1', (req, res) => {
  res.json({ message: 'Hola' });
});

app.get("/apivive", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "hola.html"));
});

// Manejo de errores
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

//startCronJob();

// HTTPS credentials
/*const credentials = {
 
  key: fs.readFileSync('./certificado/certificado.com.mx.key'),
  cert: fs.readFileSync('./certificado/certificado.com.mx.crt'),
};*/

// Crear servidores
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

// Inicializar sockets
initSocket(httpServer);
//initSocket(httpsServer);

// Arrancar servidores
httpServer.listen(HTTP_PORT, () => {
  console.log(`✅ HTTP server running on port ${HTTP_PORT}`);
});

/*httpsServer.listen(HTTPS_PORT, () => {
  console.log(`🔒 HTTPS server running on port ${HTTPS_PORT}`);
});*/

module.exports = { httpServer };
