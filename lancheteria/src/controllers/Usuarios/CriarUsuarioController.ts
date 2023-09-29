import { Request, Response } from "express"
import {CriarUsuariosServices} from '../../services/Usuarios/CriarUsuariosServices'

class CriarUsuarioController{

    async handle(req:Request , res:Response){
        const { nome, email, senha } = req.body
    

        const criarUsuariosServices = new CriarUsuariosServices()
        const usuarios = await criarUsuariosServices.execute({
            nome,
            email,
            senha
        })
        return res.json(usuarios)
    }
}


export {CriarUsuarioController}