var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }

      if (
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] + asteroids[i] < 0
      ) {
        stack.pop();
      } else if (stack[stack.length - 1] + asteroids[i] === 0) {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] + asteroids[i] > 0) {
        continue;
      }
      stack.push(asteroids[i]);
    }
  }
  return stack;
};
Console;
