const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [
                {
                   id: 1,
                   text: 'Fare la spesa',
                   done: true
                },
                {
                    id: 2,
                    text: 'Studiare',
                    done: false
                },
                {
                    id: 3,
                    text: 'Giocare a calcio',
                    done: true
                },
                {
                    id: 4,
                    text: 'Pulizie di casa',
                    done: false
                },
                {
                    id: 5,
                    text: 'Lavare il cane',
                    done: false
                },
                {
                    id: 6,
                    text: 'Fare i compiti',
                    done: true
                },
            ],
            newTask: ''
        }
    },
    methods: {
        changeDone(index){
            let task = this.todoList[index]
            if(task.done){
                task.done = false
            }
            else{
                task.done = true;
            }
        },
        removeTask(index){
            console.log(index);
            this.todoList.splice(index, 1);
        },
        addNewTask(){
            let object = {
                text: this.newTask,
                done: false
            }
            this.todoList.push(object);
            this.newTask = '';
        },
    }
}).mount('#app');