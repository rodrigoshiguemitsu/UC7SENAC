

import { Request, Response } from "express";

class CriarUsuarioNovoController{

    async handle (req:Request, res:Response){
        const {Nome, Celular, Fixo, Rua, Complemento, Bairro, Cidade, Estado}=req.body
        console.log(Nome, Celular, Fixo, Rua, Complemento, Bairro, Cidade, Estado)
    }

}

export{CriarUsuarioNovoController}