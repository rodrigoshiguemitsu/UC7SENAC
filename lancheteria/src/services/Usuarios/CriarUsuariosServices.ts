import prismaClient from "../../prisma"
import {hash}from 'bcryptjs'

interface CriarUsuario{
    nome: string
    email: string
    senha: string
}

class CriarUsuariosServices{
    async execute({nome,email,senha}:CriarUsuario) {
        if(!nome || !email || !senha){
            throw new Error('Campos em brancos não são permitidos')
        }

        const emailCadastrado = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(emailCadastrado){
            throw new Error('Email já esta Cadastrado')
        }

        const senhaCrypt= await hash(senha, 8)

        const usuario = await prismaClient.user.create({
            data:{
                nome:nome,
                email:email,
                senha:senhaCrypt
            },
            select:{
                id:true,
                nome:true,
                email:true
            }
        })
        return { dados: usuario}

    }
}

export {CriarUsuariosServices}