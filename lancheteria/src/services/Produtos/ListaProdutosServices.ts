import prismaClient from "../../prisma";



class ListaProdutosServices{
    async execute(){
        const listaProduto= await prismaClient.produto.findMany({})
        return (listaProduto)
    }
}

export {ListaProdutosServices}