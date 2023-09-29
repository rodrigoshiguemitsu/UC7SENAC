import prismaClient from "../../prisma"
import{compare} from 'bcryptjs'


interface criarLogin{
    email: string
    senha:string
}

class CriarLoginServices{

    async execute ({email,senha}:criarLogin){
       
        const usuario = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if (!usuario){
            throw new Error ("Usuário/Senha Incorretos")
        }
        

        const autenticado = await compare(senha, usuario.senha)
        console.log(autenticado)
        
        if(!autenticado){
            throw new Error ("Usuário/Senha Incorretos")
        }


        return ({dados:'Autenticado com sucesso'})



    }
   

}
export {CriarLoginServices}