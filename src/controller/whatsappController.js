const VerificarToken = (req,res)=>{
    res.send("Verificar");
}

const RecibirToken = (req,res)=>{
    res.send("Recibir");
}

module.exports={
    VerificarToken,
    RecibirToken
}