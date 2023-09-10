'use strict';

const fn = () => {
    const objectConst = { name: 'shems' }
    let objectLet = { name: 'shems' }
    objectConst.name = 'shemsedinov'
    objectLet.name = 'shemsedinov'
    const tempObject = {}
    // objectConst = tempObject   const reference can`t be changed 
    objectLet = tempObject
};

module.exports = { fn };
