/**
 * @return {Function}
 */

// Arrow Function
var createHelloWorld = function () {
  return () => {
    return "Hello World";
  };
};

// Function
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
