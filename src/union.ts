let id: (number | string);

id = 1;
console.log(id);

id = '0e152048-a891-4ee5-82de-a07cef3d8889';
console.log(id);

const findById = (id: (number | string)): (number | string) => id;
console.log(findById(id));