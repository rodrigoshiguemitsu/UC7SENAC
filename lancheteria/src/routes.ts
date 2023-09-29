import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'



import {CriarClientesControllers} from "./controllers/Clientes/CriarClientesControllers";
import {CriarUsuarioController} from './controllers/Usuarios/CriarUsuarioController'
import {CriarUsuarioNovoController} from'./controllers/Usuarios/CriarUsuarioNovoController'
import { ListaClientesControllers } from "./controllers/ListaClientes/ListaClientesControllers";
import { CriarProdutosControllers } from "./controllers/Produtos/CriarProdutosControllers";
import { ListaUsuariosControllers } from "./controllers/Usuarios/ListarUsuariosControllers";
import { ApagarUsusariosControllers } from "./controllers/Usuarios/ApagarUsuariosControllers";
import { ListarUsuarioUnicoController } from "./controllers/Usuarios/ListarUsuarioUnicoController";
import { AlterarUsuarioController } from "./controllers/Usuarios/AlteraUsuarioController";
import { ListaClienteUnicoController } from "./controllers/ListaClientes/ListaClienteUnicoController";
import { ApagarClientesConstrollers } from "./controllers/Clientes/ApagarClientesControllers";
import { AlterarClientesController } from "./controllers/Clientes/AlterarClientesController";
import { CriarLoginController} from "./controllers/CriarLoginController/CriarLoginController";
import { ApagarProdutosControllers } from "./controllers/Produtos/ApagarProdutosController";
import { ListaProdutosControllers } from "./controllers/Produtos/ListaProdutosControllers";




const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

//Produtos


router.post('/CriarLogin', new CriarLoginController().handle)
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosControllers().handle)

router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/CriarUsuarioNovoController', new CriarUsuarioNovoController().handle)
router.post('/CriarClientesControllers', new CriarClientesControllers().handle)


router.get('/ListaClientesControllers', new ListaClientesControllers().handle)
router.get('/ListaUsuariosControllers',new ListaUsuariosControllers().handle) 
router.get('/ListarUsuarioUnico/:id',new ListarUsuarioUnicoController().handle)
router.get('/ListaClienteUnico/:id',new ListaClienteUnicoController().handle)
router.get('/ListaProdutosController/files', new ListaProdutosControllers().handle)

//Alterar
router.put('/AlterarUsuario',new AlterarUsuarioController().handle ) 
router.put('/AlterarCliente', new AlterarClientesController().handle)

//Apagar

router.delete('/ApagarUsuariosControllers', new ApagarUsusariosControllers().handle)
router.delete('/ApagarClientes',new ApagarClientesConstrollers().handle)
router.delete('/ApagarProdutos', new ApagarProdutosControllers().handle)



export {router}