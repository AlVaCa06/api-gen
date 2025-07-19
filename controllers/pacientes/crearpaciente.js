const createPaciente = (Pacientes) => async (req, res, next) => {
  try {
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      nombreCompleto,
      fechaNacimiento,
      correo,
      telefono,
      token,
      estatus,
      user,
      pass,
      empresaId
    } = req.body;

    if (!nombre || !apellidoPaterno || !correo || !user || !pass) {
      return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    }

    const nuevoPaciente = await Pacientes.create({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      nombreCompleto,
      fechaNacimiento,
      correo,
      telefono,
      token,
      estatus: estatus !== undefined ? estatus : true,
      user,
      pass,
      empresaId
    });

    return res.status(201).json({
      message: 'Paciente creado correctamente.',
      paciente: nuevoPaciente
    });
  } catch (e) {
    console.log(`Error al crear paciente: ${e}`);
    return res.status(500).json({ message: 'Error interno al crear el paciente.' });
  }
};

module.exports = createPaciente;
