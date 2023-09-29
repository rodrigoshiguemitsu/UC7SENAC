import { Request, Response } from "express";
import { ListaProdutosServices } from "../../services/Produtos/ListaProdutosServices";

class ListaProdutosControllers{
    async handle(req:Request, res:Response){

        const listaProdutosServices = new ListaProdutosServices()
        const listaProduto = await listaProdutosServices.execute()
        
        return res.json(listaProduto)
    }

}

export { ListaProdutosControllers}