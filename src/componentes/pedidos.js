import { bd } from "../bd"
import { tablaPedidos } from "./tablaPedidos"

export const pedidos = {
    template: `
    <div class="col-6">
    <h3>Grupo</h3>
    <form novalidate>
    <label for="nombreGrupo" class="label-control ">Nombre del grupo:</label>
    <input required minlength=4 maxlength=10 type="text" class="form-control mt-2 nombre" placeholder ="Borrachos de DAW2">
    <div class="invalid-feedback">
        Nombre entre 4 y 10 letras
    </div>
    <label for="numeroMesa" class="label-control">Mesa numero</label>
    <input min=1 max=15 type="number" class="form-control mt-2 mesa" placeholder ="0">
    <div class="invalid-feedback">
        Num mesa del 1 al 15
    </div>
  
    <h3 class="mt-5">Haz tu pedido</h3>
    <div class="d-flex gap-3 ">
      <select required name="cervezas" id="cervezas" class="form-control">
        <option value="">Selecciona qué birra quieres</option>
        <option value="">Estrella Galicia</option>
      </select>
      <div class="invalid-feedback">
              Selecciona una opción
        </div>
    
      <input required min=1 type="number" value="1" class="form-control cantidad">
      <div class="invalid-feedback">
          Mínimo una cerveza
        </div>
    </div>
    <div class="submit">
    <button type="submit" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
    </div>
    
    </form>
  </div>

  <div class="col-6 border fichaCerveza">
    
  </div>`
    ,
    script:()=>{
        document.querySelector('.vistaUsuario').innerHTML = pedidos.template

        tablaPedidos.script()

        let option = ''
        bd.forEach(element => {
            option += `<option value="${element.id}">${element?.nombre}</option>`
        });
        document.querySelector('#cervezas').innerHTML = option

        const selectCerveza =  document.querySelector('#cervezas')

        let select = 3
        selectCerveza.addEventListener("change", (event) => {
            
            const cerveza = bd.filter((cerve) => cerve.id==event.target.value)


            const html = `<div class="p-3 d-flex">
            <div class="w-50">
              <img src="${cerveza[0].imagen}" alt="" class="w-100">
            </div>
            <div>
              <h4 class="">${cerveza[0].nombre}</h4>
              <p>${cerveza[0].descripcion}</p>
            </div>
          </div>`

          
          select = event.target.value
          document.querySelector('.fichaCerveza').innerHTML = html
        });

        
        
    }
}