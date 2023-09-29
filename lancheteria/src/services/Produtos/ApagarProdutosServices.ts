import prismaClient from "../../prisma";

interface ApagarProdutos{

    deletar:string
}

class ApagarProdutosServices{
    async execute({deletar}:ApagarProdutos){
        await prismaClient.produto.delete({
            where:{
                id:deletar
            }
        })
        return {dados:'Registro apagado com sucesso'}
    }
}
export{ApagarProdutosServices}