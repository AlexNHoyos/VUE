const app = new Vue({
  el: '#main',
  data:{
    conectado: true,
    edad: 18,
    lista:['Hola', 'Mundo', 'Vue.js'],
    listapersonas:[
      {nombre: 'Juan', edad: 25},
      {nombre: 'Ana', edad: 30},
      {nombre: 'Luis', edad: 22}
    ]
  }
})