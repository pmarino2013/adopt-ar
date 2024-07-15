//template o molde de mascotas
class Mascota {
  constructor(
    nombre,
    especie,
    raza,
    edad,
    sexo,
    estatura,
    color,
    vacunado,
    esterilizado,
    contacto,
    destacado,
    imagen
  ) {
    this.id = crypto.randomUUID();
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
    this.sexo = sexo;
    this.estatura = estatura;
    this.color = color;
    this.vacunado = vacunado;
    this.esterilizado = esterilizado;
    this.contacto = contacto;
    this.destacado = destacado;
    this.imagen = imagen;
  }
}

let mascotas = [];

//array o lista de especies
let especies = ["perro", "gato", "anfibio", "roedor", "ave", "exótico", "pez"];
//array o lista de sexo
let sexo = ["macho", "hembra"];
//array o lista de estatura o tamaño
let estaturas = ["pequeño", "mediano", "grande"];

//capturar elementos del DOM de los selects
// let listaEspecies = document.querySelector('#especies')
let nombre = document.querySelector("#nombre");
let listaEspecies = document.getElementById("especies");
let raza = document.querySelector("#raza");
let edad = document.querySelector("#edad");
let listaSexo = document.getElementById("sexo");
let listaEstatura = document.getElementById("estatura");
let color = document.querySelector("#color");
let vacunado = document.querySelector("#vacuna");
let esterilizado = document.querySelector("#esterilizado");
let contacto = document.querySelector("#contacto");
let destacado = document.querySelector("#destacado");
let imagen = document.querySelector("#imagen");

// cargar las listas con datos
especies.forEach((especie) => {
  let option = document.createElement("option");
  option.value = especie;
  option.innerText = especie;
  listaEspecies.append(option);

  {
    /* <select>
<option value='perro'>perro</option> 
<option value='gato'>gato</option> 
</select> */
  }
});

sexo.forEach((item) => {
  let option = document.createElement("option");
  option.value = item;
  option.innerText = item;
  listaSexo.append(option);
});

estaturas.forEach((item) => {
  let option = document.createElement("option");
  option.value = item;
  option.innerText = item;
  listaEstatura.append(option);
});
// crear la función para agregar mascotas nuevas
const agregarMascota = (event) => {
  event.preventDefault();
  let nuevaMascota = new Mascota(
    nombre.value,
    listaEspecies.value,
    raza.value,
    edad.value,
    listaSexo.value,
    listaEstatura.value,
    color.value,
    vacunado.checked,
    esterilizado.checked,
    contacto.value,
    destacado.checked,
    imagen.value
  );

  mascotas.push(nuevaMascota);
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
  document.querySelector("#formulario-alta").reset();
  nombre.focus();

  //   nombre.value = "";
  //    listaEspecies.value = "";
  //     raza.value = "";
  //     edad.value = "";
  //     listaSexo.value = "";
  //     listaEstatura.value = "";
  //     color.value = "";
  //     vacunado.checked = false;
  //     esterilizado.checked = false;
  //     contacto.value = "";
  //     destacado.checked = false;
  //     imagen.value = "";
};
//array de objetos
//guardar en localstorage
document
  .querySelector("#formulario-alta")
  .addEventListener("submit", agregarMascota);
