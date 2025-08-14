const LogIn = () => async (req, res, next) => {
    const { correo, pass } = req.body;

   try {
      /* const usuario = await Usuario.findOne({ where: { correo } });
  
      if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
  
      const passwordMatch = await bcrypt.compare(pass, usuario.pass);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      const token = jwt.sign(
        { id: usuario.id, correo: usuario.correo },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  */
      return res.json({ message: 'Login exitoso', token });
    } catch (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ message: 'Error interno' });
    }
    
};

module.exports = LogIn;
