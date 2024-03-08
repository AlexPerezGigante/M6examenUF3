import { pedidos } from "../componentes/pedidos"
import { tablaPedidos } from "../componentes/tablaPedidos"

export const home = {
    template: `
    <div class="container mt-3 p-5 border shadow-lg ">
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row vistaUsuario">
      
      
    </div>
    

  </div>
  <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg ">
    <div class="row vistaCamareros">
      
    
    </div>
    
  </div>
    `
    ,
    script:()=>{
        pedidos.script()
        tablaPedidos.script()
    }
}