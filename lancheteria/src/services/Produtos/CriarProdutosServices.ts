import prismaClient from "../../prisma";

interface CriarProduto {
    nome: string
    fabricante: string
    quantidade: string
    banner: string
    preco: string
}

class CriarProdutosServices{
    async execute ({nome, fabricante, quantidade,banner, preco}:CriarProduto){
        if(!nome || !fabricante || !quantidade ||!banner || !preco){
            throw new Error ('Campos em brancos não são permitidos')
        }

        await prismaClient.produto.create({
            data:{
                nome: nome,
                fabricante: fabricante,
                quantidade: quantidade,
                banner: banner,
                preco:preco
            },
            select:{
                
                nome:true,
                fabricante:true,
                quantidade:true,
                banner:true,
                preco:true,
            }
        })
        return {dados:'Produto cadastrado com sucesso'}
    }
}
export{CriarProdutosServices}