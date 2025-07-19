const createUser = (Usuarios) => async (req, res, next) => {
    try {
      const {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        estatus,
      } = req.body;
  
      if (!nombre || !apellidoPaterno || !correo || !tipoUsuarioId) {
        return res.status(400).json({ message: 'Faltan campos obligatorios.' });
      }
  
      const nuevoUsuario = await Usuarios.create({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        correo,
        estatus: estatus !== undefined ? estatus : true,
      });
  
      return res.status(201).json({ message: 'Usuario creado correctamente.', usuario: nuevoUsuario });
    } catch (e) {
      console.log(`Error al crear usuario: ${e}`);
      return res.status(500).json({ message: 'Error interno al crear el usuario.' });
    }
  };
  
  module.exports = createUser;
  