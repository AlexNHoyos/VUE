const app = new Vue({
    el: '#main',
    data: {
        tarea: null,
        tarea_lista:['Hola', 'Mundo', 'Vue'],
    },
    methods: {
        agregarTarea(){
            this.tarea_lista.unshift(this.tarea)
        }
    }
})