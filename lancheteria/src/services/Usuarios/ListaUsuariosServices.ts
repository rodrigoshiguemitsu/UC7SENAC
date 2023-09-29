import prismaClient from "../../prisma";

class ListaUsuariosServices{
    async execute(){
        const listaUsuarios = await prismaClient.user.findMany({})
        return(listaUsuarios)
    }
}

export {ListaUsuariosServices}