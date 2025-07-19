const socketIo = require('socket.io');
//const jwt = require('jsonwebtoken');
//const { SECRET_KEY_API } = process.env;

let io;

const initSocket = (server) => {
  io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  /*io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    }
    jwt.verify(token, SECRET_KEY_API, (err, decoded) => {
      if (err) {
        return next(new Error('Authentication error'));
      }
      socket.userId = decoded.id;
      next();
    });
  });*/

  io.on('connection', (socket) => {
    console.log('Cliente conectado: ${socket.id} ');

    socket.on('disconnect', () => {
      console.log('Usuario desconectado: ${socket.id}');
    });
  });
};

const sendToUser = (userId, message) => {
  for (let [id, socket] of io.of('/').sockets) {
    if (socket.userId === userId) {
      socket.emit('mensaje', message);
      break;
    }
  }
};

 
const sendEventoInfo = (jsonfin) => {
  if (!io) {
    console.error("⚠️ Socket.io no está inicializado.");
    return;
  }
  
  io.emit('Mensaje', jsonfin);  
};
 
module.exports = { initSocket, sendToUser, sendEventoInfo };