import { Request, Response } from "express";
import { ListarClienteUnicoServices } from "../../services/ListaClientes/ListaClienteUnicoServices";

class ListaClienteUnicoController{
   async handle(req:Request, res:Response){
    const {id} = req.params

    const listaClienteUnico = new ListarClienteUnicoServices()
    const resposta = await listaClienteUnico.execute({
        id
    })
    return res.json(resposta)
   }
}
export {ListaClienteUnicoController}