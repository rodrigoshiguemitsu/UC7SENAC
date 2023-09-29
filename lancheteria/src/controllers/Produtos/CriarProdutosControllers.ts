import { Request,Response} from "express";
import{CriarProdutosServices} from '../../services/Produtos/CriarProdutosServices' 

class CriarProdutosControllers{
    async handle(req:Request, res:Response){
        const{nome, fabricante, quantidade, preco}=req.body

        if(!req.file){
            throw new Error('Imagem com problema')
        }else{
            const { originalname,filename:banner} = req.file
        

        const criarProdutosServices = new CriarProdutosServices()
        const produtos = criarProdutosServices.execute({
            nome,
            fabricante, 
            quantidade, 
            banner,
            preco
        })
        return res.json(produtos)
    }
    }
}
export{CriarProdutosControllers}