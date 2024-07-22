let cuerpoTabla = document.querySelector("tbody");
let contadorMascotas = document.getElementById("count");
// let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

crearTabla();

function crearTabla() {
  cuerpoTabla.innerHTML = "";
  contadorMascotas.innerText = "Mascotas registradas: " + mascotas.length;
  // if(localStorage.getItem('mascotas')){
  //     mascotas = JSON.parse(localStorage.getItem('mascotas'))
  // }else{
  //     mascotas=[]
  // }
  if (mascotas.length > 0) {
    //recorrer el array
    mascotas.map((mascota) => {
      let fila = document.createElement("tr");
      let celdas = /*HTML */ `<td>${mascota.nombre}</td>
          <td>${mascota.especie}</td>
          <td>${mascota.raza}</td>
          <td>${mascota.edad}</td>
          <td>${mascota.sexo}</td>
          <td>${mascota.estatura}</td>
          <td>${mascota.color}</td>
          <td>
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button class="btn btn-danger" onclick="borrarRegistro('${mascota.id}')">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
          </td>`;

      fila.innerHTML = celdas;
      cuerpoTabla.append(fila);
    });
  } else {
    cuerpoTabla.append("No hay datos para mostrar");
  }
}

const borrarRegistro = (id) => {
  let index = mascotas.findIndex((item) => item.id === id);

  if (index >= 0) {
    let validar = confirm(
      `Está seguro que quiere eliminar a ${mascotas[index].nombre}`
    );

    if (validar) {
      mascotas.splice(index, 1);
      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      crearTabla();
    }
  }
};
