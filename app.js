const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data : {
        title: 'Hello World',
        newTodo :'',
        tasks : [],
    },
    methods: {
        addTodo() {
            this.tasks.push({
                title: this.newTodo,
                done: false,
            })
        }
    }
})