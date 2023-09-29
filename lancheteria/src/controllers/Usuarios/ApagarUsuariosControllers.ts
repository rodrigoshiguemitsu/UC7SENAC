import { Request, Response } from "express";
import { ApagarUsuariosServices } from "../../services/Usuarios/ApagarUsuariosServices";

class ApagarUsusariosControllers{
    async handle (req:Request, res:Response){
        const {deletar} =req.body
        const apagarUsusariosServices = new ApagarUsuariosServices()
        const apagar = await apagarUsusariosServices.execute({
            deletar
        }) 
        return res.json(apagar)
    }
}

export {ApagarUsusariosControllers}


