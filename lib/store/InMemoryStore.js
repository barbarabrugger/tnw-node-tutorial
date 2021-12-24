'use strict';
class InMemoryStore {
    constructor() {
        //Intentionally left blank.
    }

    async initialize() {
        this.todos = [];
    }

    async noteTodo({ todo }) {
        this.todos.push(todo);
    }

    async markTodoAsDone({ id }) {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new Error('Todo not found.');
        }

        todo.status = 'done';
    }

    async getRemainingTodos() {
        return this.todos.filter(todo => todo.status === 'open');
    }
}

module.exports = { InMemoryStore };