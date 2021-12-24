'use strict';

const { createTodo } = require('../createTodo');

const noteTodo = function ({ store }) {
    return async function (req, res) {

        const { description } = req.body;

        const todo = createTodo({ description });

        await store.noteTodo({ todo });
        res.json({ id: todo.id });
    };
};

module.exports = { noteTodo };