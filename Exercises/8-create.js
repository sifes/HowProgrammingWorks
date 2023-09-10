'use strict';

const createUser = function (name, city) {
    const res = {}
    res.name = name
    res.city = city
    return res
};

module.exports = { createUser };
