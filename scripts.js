// Make my own version of map, filter, forEach, reduce, sort, slice, splice.

// ForEach executes a function once for each element in array.

function myForEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

function myMap(array, fn) {
  let changedArray = [];
  for (let i = 0; i < array.length; i++) {
    changedArray.push(fn(array[i]));
  }
  return changedArray;
}

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function myFilter(array, fn) {
  let filtered = [];
  for(let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      filtered.push(array[i]);
    }
  }
  return filtered;
} 

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin 
//to end (end not included) where begin and end represent the index of items in that array.

function mySlice(array, startIdx, endIdx) {
  let copy = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= startIdx && i < endIdx) {
      copy.push(array[i]);
    }
  }
  return copy;
}
