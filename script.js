// SPREAD OPERATOR

const numeros = [14, 15, 67, 1, 150, 43, 67]
const copiaNumeros = [10, ...numeros, 80, 20]

console.log(Math.max(...numeros))
console.log(Math.min(...numeros))

// const usuario = {
//     nombre: "Pablo",
//     apellido: "Martinez",
//     edad: 30,
//     sabeCSS: true
// }

//console.log("primera ejecucion: ", usuario)
//usuario.sabeJS = false

// const copiaUsuario = {...usuario, sabeCSS: false, sabeJS: false}
//console.log("segunda ejecucion: ", copiaUsuario)

const gastos = [
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 10,
    },
    {
      tipo: "ganancia",
      categoria: "salida",
      monto: 100,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 1000,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 10000,
    },
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 1000,
    },
];

// const nuevoGastos = {
//     tipo: "ganancia", 
//     categoria: "birra", 
//     monto: 180
// }

// const copiaGastos = [...gastos, nuevoObjeto]

// REST OPERATOR

const sumar = (...numeros) => {
    let suma = 0
    numeros.map(numero => suma += numero)
    return suma
}

// console.log(sumar(5, 10))
// console.log(sumar(5, 5, 10, 40, 65, 78))

// DESTRUCTURING

const nuevoObjeto = {
    tipo: "ganancia", 
    categoria: "birra", 
    monto: 180
}

const nuevoObjeto2 = {
    tipo: "gasto", 
    categoria: "veterinaria", 
    monto: 2500
}

const { tipo, categoria, monto } = nuevoObjeto

// console.log(tipo)
// console.log(categoria)
// console.log(monto)


// const mostrarPropiedades = (objeto) => {
//     const { tipo, categoria, monto } = objeto
//     const contenedor = document.querySelector('#contenedor')
//     contenedor.innerHTML += `<ul>
//                                 <li>Tipo: ${tipo}</li>
//                                 <li>Categoria: ${categoria}</li>
//                                 <li>Monto: ${monto}</li>
//                             </ul>`
// }

const crearTabla = () => {
    const thead = document.querySelector('#thead')
    const props = Object.keys(gastos[0])
    thead.innerHTML += `
                        <th>${props[0]}</th>
                        <th>${props[1]}</th>
                        <th>${props[2]}</th>
                    `
    const tbody = document.querySelector('#tbody')
    gastos.map(gasto => {
        const { tipo, categoria, monto } = gasto
        tbody.innerHTML += `<tr>
                                <td>${tipo}</td>
                                <td>${categoria}</td>
                                <td>${monto}</td>
                            </tr>`
    })
}

crearTabla()

// mostrarPropiedades(nuevoObjeto)
// mostrarPropiedades(nuevoObjeto2)

const usuario = {
    nombre: "Pablo",
    apellido: "Martinez",
    edad: 30,
    sabeCSS: true
}

// hasOwnProperty

// console.log(usuario.hasOwnProperty("apellido"))
// console.log(usuario.hasOwnProperty("sabeJS"))

// Object.keys()

// console.log(Object.keys(usuario))
const propiedades = Object.keys(usuario)
// for (let prop of propiedades) {
//     console.log(prop)
// }

// Object.values()

const values = Object.values(usuario)

// Object.entries()

const entries = Object.entries(usuario)

// for (const [key, value] of entries) {
//     console.log(`${key}: ${value}`);
// }