'use strict';

const phonebook = {
    'Marcus Aurelius': '+380445554433',
    'Marc Aurel': '+380445554434',
    'Mac Aul': '+380445554435'
}
const findPhoneByName = (name) => phonebook[name]




module.exports = { phonebook, findPhoneByName };
