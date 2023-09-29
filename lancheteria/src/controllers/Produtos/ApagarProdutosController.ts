import { Request, Response } from "express";
import { ApagarProdutosServices } from "../../services/Produtos/ApagarProdutosServices";

class ApagarProdutosControllers{
    async handle (req:Request, res:Response){
        const {deletar} =req.body
        const apagarProdutosServices = new ApagarProdutosServices()
        const apagar = await apagarProdutosServices.execute({
            deletar
        }) 
        return res.json(apagar)
    }
}

export {ApagarProdutosControllers}
