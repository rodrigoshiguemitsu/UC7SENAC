import { Request, Response } from "express";
import { AlterarClientesServices } from "../../services/Clientes/AlterarClientesServices";


class AlterarClientesController{
async handle (req:Request, res:Response){
    const { id, alterarNome, alterarFone}= req.body
    
    const alterarClientesServices = new AlterarClientesServices()
    const resposta = await alterarClientesServices.execute({
        id, 
        alterarNome,
        alterarFone
    })
    return res.json(resposta)


}

}

export {AlterarClientesController}