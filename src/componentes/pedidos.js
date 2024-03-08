import { bd } from "../bd"

export const pedidos = {
    template: `
    <div class="col-6">
    <h3>Grupo</h3>
    <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
    <input type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
    <label for="numeroMesa" class="label-control">Mesa numero</label>
    <input type="number" class="form-control mt-2" placeholder ="0">
  
    <h3 class="mt-5">Haz tu pedido</h3>
    <div class="d-flex gap-3 ">
      <select name="cervezas" id="cervezas" class="form-control">
        <option value="">Selecciona qué birra quieres</option>
        <option value="">Estrella Galicia</option>
      </select>
    
      <input type="number" value="0" class="form-control">
    </div>
    <button class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
  </div>
  <div class="col-6 border ">
    <div class="p-3 d-flex">
      <div class="w-50">
        <img src="estrella.jpg" alt="" class="w-100">
      </div>
      <div>
        <h4 class="">Estrella Galicia</h4>
        <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
      </div>
      

    </div>
  </div>`
    ,
    script:()=>{
        document.querySelector('.vistaUsuario').innerHTML = pedidos.template

        let option = ''
        bd.forEach(element => {
            option += `<option value="${element.id}">${element.nombre}</option>`
        });
        document.querySelector('#cervezas').innerHTML = option

        
    }
}