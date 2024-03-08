import { bd } from "../bd"

export const tablaPedidos = {

    template: `
    <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
    <h3>Pedidos</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Grupo</th>
          <th>Mesa</th>
          <th>Cerveza</th>
          <th>Cantidad</th>
          <th>Estado</th>
        </tr>        
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Borrachos de DAW2</td>
          <td>1</td>
          <td>Estrella Galicia</td>
          <td>3</td>
          <td>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-warning w-100 btn-sm">Pedido pendiente...</button>
              <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
            </div>
            
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cabezones contentos</td>
          <td>1</td>
          <td>Estrella DAM</td>
          <td>2</td>
          <td>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-success w-100 btn-sm">¡Pedido servido!</button>
              <button class="btn btn-outline-danger w-100 btn-sm"> 🗑 Borrar pedido</button>
            </div>       
          </td>
        </tr>
      </tbody>
    </table>`
    ,
    script:()=>{
        document.querySelector('.vistaCamareros').innerHTML = tablaPedidos.template
    }
}