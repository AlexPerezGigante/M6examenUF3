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
        

        let comandos = [
            
        ]

        function getComandos(){
            return comandos
        }

        function setComandos(array){
            comandos = array
        }

        pintaTabla()
        const formulario = document.querySelector("form")
        //Detectamos su evento submit (enviar)
        formulario.addEventListener("submit", (event) => {
            event.preventDefault()
            //Comprobamos si el formulario no valida 
            if (!formulario.checkValidity()) {
            //Detenemos el evento enviar (submit)
            event.preventDefault()
            event.stopPropagation()
            //Y añadimos la clase 'was-validate' para que se muestren los mensajes
            formulario.classList.add('was-validated')
            }else{
                
                const nombre = document.querySelector('.nombre')

                const mesa = document.querySelector('.mesa')

                const cantidad = document.querySelector('.cantidad')

                const cerv = document.querySelector('#cervezas').value

                const cerveza = bd.filter((cerve) => cerve.id==cerv)

                const array = {
                    id: comandos.length+1,
                    numeroMesa: mesa.value,
                    grupo: nombre.value,
                    cerveza: cerveza[0].nombre,
                    cantidad: cantidad.value,
                    estado: 'pendiente'
                }

                comandos.push(array)
                
                pintaTabla()
            }
        
        })

        
        function pintaTabla(){

            const array = getComandos()
            let html = ''

            array.forEach(element => {
                html += ` <tr>
                <td>${element.id}</td>
                <td>${element.grupo}</td>
                <td>${element.numeroMesa}</td>
                <td>${element.cerveza}</td>
                <td>${element.cantidad}</td>
                <td>
                `
                if(element.estado=='pendiente'){
                    html +=`
                    <div class="d-flex gap-2">
                      <button data-cervezaid=${element.id} class="btn btn-outline-warning w-100 btn-sm botonPendiente">Pedido pendiente...</button>
                      <button data-cervezaid=${element.id} class="btn btn-outline-danger w-100 btn-sm botonBorrar"> 🗑 Borrar pedido</button>
                    </div>
                    
                  </td>
                </tr>`
                }
                else{
                    html+=`
                    <div class="d-flex gap-2">
              <button data-cervezaid=${element.id} class="btn btn-outline-success w-100 btn-sm botonServido">¡Pedido servido!</button>
              <button data-cervezaid=${element.id} class="btn btn-outline-danger w-100 btn-sm botonBorrar"> 🗑 Borrar pedido</button>
            </div>       
          </td>
        </tr>`
                }

                
                
            });


            document.querySelector('tbody').innerHTML = html

        }
        
        document.querySelector('table').addEventListener('click', (e) => {
            
            if(e.target.classList.contains('botonPendiente')){
                    const id = e.target.dataset.cervezaid
                    const base = getComandos()
                    base.forEach(element => {
                        if(element.id==id){
                            element.estado='Entregado'
                        }
                    });

                    setComandos(base)
                    pintaTabla()
            }
            if(e.target.classList.contains('botonBorrar')){
                const id = e.target.dataset.cervezaid

                const bdElementoBorrado = comandos.filter((item)=>item.id != id)
                
                setComandos(bdElementoBorrado)
                
                pintaTabla()
        }
        })

        
    }
}