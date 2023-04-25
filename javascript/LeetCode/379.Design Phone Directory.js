/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.set = new Set();

  while (maxNumbers) {
    maxNumbers--;
    this.set.add(maxNumbers);
  }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  if (this.set.size === 0) {
    return -1;
  } else {
    let n = this.set.values().next().value;
    this.set.delete(n);
    return n;
  }
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return this.set.has(number);
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  this.set.add(number);
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
