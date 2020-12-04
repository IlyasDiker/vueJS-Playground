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
            });
            this.newTodo =''
        },
        removetodo(task) {
            const taskindex = this.tasks.indexOf(task);
            this.tasks.splice(taskindex, 1);
        },
        alldone() {
            this.tasks.forEach(task => {
                task.done = true;
            });
        }
    }
})