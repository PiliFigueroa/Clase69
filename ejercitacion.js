/* Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator). */

const delUnoAlTres = [1, 2, 3];
const delUnoAlCinco = [...delUnoAlTres, 4, 5]

//console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]

/* A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’ */

const arrayDado = ['UNO', 'DOS', 'TRES'];
const nuevoArray = ['CERO',...arrayDado,'CUATRO']

//console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

/* Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator. */

const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

const fraseCompleta = [...frase0, ...frase1, ...frase2]

//console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

/*  Completá el siguiente código para llegar al resultado esperado (respetar orden).
    Quiero obtener un único objeto final con todas las propiedades
 */

const reviews = {
    reviewIMDB: 9,
    reviewFilmAffinity: 8.1
};
    
const peliInfo = {
    titulo: 'The Dark Knight',
    anio: 2008
};
    
const pelicula = {...peliInfo, ...reviews}

// console.log(pelicula);
// {
//   titulo: 'The Dark Knight',
//   anio: 2008,
//   reviewIMDB: 9,
//   reviewFilmAffinity: 8.1
// }

/* 
    Completá el siguiente código para llegar al resultado esperado (respetar orden).
    Tengo un objeto con propiedades que representa una alumna
    Las propiedades que contiene son: nombre y apellido
    Queremos agregar la propiedad sabeJS con valor true, y la propiedad edad con el valor 27
    La propiedad sabeJS queremos que esté al principio y la propiedad edad al final
 */

const estudiante = {
    nombre: 'Ada',
    apellido: 'Lovelace'
};
    
const estudianteJS = {sabeJS:true,...estudiante, edad:27}

//console.log(estudianteJS);
// { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }