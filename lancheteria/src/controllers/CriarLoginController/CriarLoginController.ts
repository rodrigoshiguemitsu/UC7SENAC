import { Request,Response } from "express";
import{ CriarLoginServices} from '../../services/Login/CriarLoginServices'

class CriarLoginController{

   async handle (req:Request, res:Response){
    const{ email, senha} = req.body

    const criarLoginServices = new CriarLoginServices()

    const CriarLogin = await criarLoginServices.execute({
      email,
      senha

    })
    return res.json(CriarLogin)
   }
}


export{CriarLoginController}