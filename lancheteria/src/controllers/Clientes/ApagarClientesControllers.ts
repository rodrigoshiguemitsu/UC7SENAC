import { Request,Response } from "express";
import { ApagarClientesServices} from "../../services/Clientes/ApagarClientesServices"

class ApagarClientesConstrollers{
    async handle (req:Request, res:Response){
        const {deletar} = req.body
        const apagarClientesServices = new ApagarClientesServices()
        const apagar = await apagarClientesServices.execute({
            deletar
        })
        return res.json(apagar)
    }
}
export { ApagarClientesConstrollers}