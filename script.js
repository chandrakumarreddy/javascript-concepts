function array() {
  const arr = Object.create(array.prototype);
  Object.defineProperty(arr, "length", {
    value: 0,
    enumerable: false,
    writable: true,
  });
  for (const index in arguments) {
    arr[index] = arguments[index];
    arr.length++;
  }
  return arr;
}

array.prototype.push = function (element) {
  this[this.length++] = element;
  return this.length;
};

array.prototype.pop = function () {
  const removedElement = this[--this.length];
  delete this[this.length];
  return removedElement;
};

array.prototype.filter = function (callback) {
  const filteredArr = array();
  for (const index in this) {
    if (this.hasOwnProperty(index)) {
      const element = this[index];
      if (callback(element, index)) {
        filteredArr.push(element);
      }
    }
  }
  return filteredArr;
};

const newArr = array(1, 2);
newArr.push(3);
newArr.push(4);
const filterdArr = newArr.filter((elem) => elem > 3);
console.log(filterdArr);
