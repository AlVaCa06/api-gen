const LogIn = () => async (req, res, next) => {
    try{
        res.status(200).json({mensaje:'hola'});
        return;
    }catch(error){
        res.status(400).json(error?.response?.data || {mensaje:'status false'});
        return;
    }
    
};

module.exports = LogIn;
