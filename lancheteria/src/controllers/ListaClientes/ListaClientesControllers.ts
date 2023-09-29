import { Request, Response } from "express"
import {ListaClientesServices} from '../../services/ListaClientes/ListaClientesServices'

class ListaClientesControllers{

    async handle(req:Request , res:Response){
    

        const listaClientesServices = new ListaClientesServices()
        const listacliente = await listaClientesServices.execute()
        return res.json(listacliente)
    }
}


export {ListaClientesControllers}