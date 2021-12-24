'use strict';

const getTodos = function ({ store }) {
    return async function (req, res) {
        const remainingTodos = await store.getRemainingTodos();

        res.json(remainingTodos);
    }
}

module.exports = { getTodos };