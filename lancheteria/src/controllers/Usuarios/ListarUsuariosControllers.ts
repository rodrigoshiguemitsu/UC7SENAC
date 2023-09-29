import { Request, Response } from "express"
import {ListaUsuariosServices} from '../../services/Usuarios/ListaUsuariosServices'

class ListaUsuariosControllers{

    async handle(req:Request , res:Response){
    

        const listaUsuariosServices = new ListaUsuariosServices()
        const listaUsuarios = await listaUsuariosServices.execute()
        return res.json(listaUsuarios)
    }
}


export {ListaUsuariosControllers}