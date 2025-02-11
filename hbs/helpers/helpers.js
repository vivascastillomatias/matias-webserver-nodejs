//helpers
const hbs = require('hbs');
//Ayuda a no repetir en los parametros para el renderizado de la página, entonces se realiza la función que devuelva lo que se necesite
hbs.registerHelper('getDiasDeCuarentena', ()=> {
    let actual = new Date();
    let inicio = new Date('2020/03/16');
    let resta = actual - inicio;
    return  Math.round(resta/ (1000*60*60*24))
    
})

hbs.registerHelper('getAnio', ()=> {
    let data = new Date();
    return data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();
    
})

//Recordar que al momento de instanciar la llamada a la funcion no se utilizan parentesis para determinar los parametros, ni tampoco se utilizan comas para separarlos
hbs.registerHelper('capitalizar', (texto)=> {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    return palabras.join(' ');
})