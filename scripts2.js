function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

//use myEach to make myMap and myFilter

function myMap(array, callback) {
  let mappedArray = [];
  myEach(array, function(x) {
    mappedArray.push(callback(x));
  })
  return mappedArray;
}

function myFilter(array, callback) {
  let filtered = [];
  myEach(array, x => {
    if (callback(x)) {
      filtered.push(x);
    }
  })
  return filtered;
}

function mySlice(array, start, end) {
  let sliced = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i < end) {
      sliced.push(array[i]);
    }
  }
  return sliced;
}

function mySplice(array, start, removeNum, replaceText) {
  for (let i = start; removeNum > 0; i++) {
    delete array[i];
    removeNum--;  
  }
  array[start] = replaceText;
  array = array.filter(x => x != 'empty');
}