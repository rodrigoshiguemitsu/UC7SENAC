import prismaClient from "../../prisma"

interface CriarCliente{
    nome: string
    cpf_cnpj: string
    rg_ie: string
    celular: string
    fixo: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}


class CriarClientesServices{
    async execute({nome, cpf_cnpj, rg_ie, celular, fixo, rua, complemento, bairro, cidade, estado}:CriarCliente){
        if(!nome || !cpf_cnpj || !rg_ie || !celular || !fixo || !rua || !complemento || !bairro || !cidade || !estado){
            throw new Error('Campos em brancos não são permitidos')
        }
    
    const cpfCadastrado  = await prismaClient.clients.findFirst({
        where:{
            OR:[
                {cpf_cnpj :{endsWith: cpf_cnpj}},
                {rg_ie:{endsWith: rg_ie}}
                
            ]}
    
        })
        
    
    if(cpfCadastrado ){
        throw new Error('Cpf/CNPJ ou RG/IE já está cadastrado')
    }
    
    
    const cliente = await prismaClient.clients.create({
        data:{
            nome: nome,
            cpf_cnpj: cpf_cnpj,
            rg_ie: rg_ie,
            celular: celular,
            fixo: fixo,
            rua: rua,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        },
        select:{
            id: true,
            nome: true,
        }
    })
    return { dados:cliente }

    }

}

export{CriarClientesServices}