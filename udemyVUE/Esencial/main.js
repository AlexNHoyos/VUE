const app = new Vue({
    el: '#main',
    data: {
        tarea: null,
        tareas: [
            {titulo: 'Aprender Vue', completado: true},
            {titulo: 'Aprender ES6', completado: false},
            {titulo: 'Aprender Java', completado: false},
            {titulo: 'Aprender C', completado: true},
            {titulo: 'Aprender C++', completado: true}
        ],
        tarea_lista:['Hola', 'Mundo', 'Vue'],
    },
    methods: {
        agregarTarea(){
            this.tarea_lista.unshift(this.tarea)
        },
        agregarTarea2(){
            this.tareas.unshift({
                titulo: this.tarea,
                completado: false
            });
        }
    }, 
    computed: {
        tareasCompletadas(){
            return this.tareas.filter(tarea => tarea.completado);
        },
    },
})