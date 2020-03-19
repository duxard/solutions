// convert array into an object

function convert(objectArray, key) {
  let initialValue = {};
  return objectArray.reduce((accumulator, objectArrayItem) => {
    return {
        ...accumulator,
        [objectArrayItem[key]]: objectArrayItem
    }
  }, initialValue);
}

// usage:
let objectArr = [{id:101,x:"one"}, {id:102,x:"two"}, {id:103,x:"three"}, {id:104,x:"four"}];
console.log( convert(objectArr, 'id') );
