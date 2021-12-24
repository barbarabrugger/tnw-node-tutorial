'use strict';

const crypto = require('crypto');

const createTodo = function ({ description }) {
    return {
        id: crypto.randomUUID(),
        description,
        status: 'open'
    };
};

module.exports = { createTodo };