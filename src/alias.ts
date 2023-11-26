type ID = string | number;

let id: ID = 1;

const findById = (id: ID): ID => id;
console.log(findById(id));

export {}