'use strict';

const phonebook = [{ name: 'Marcus Aurelius', phone: '+380445554433' }, { name: 'Marc Aurel', phone: '+380445554434' }, { name: 'Mac Aul', phone: '+380445554435' }];

const findPhoneByName = (name) => {
for (const pObj of phonebook){
    if(pObj.name===name) return pObj.phone;
}
}

module.exports = { phonebook, findPhoneByName };
