var finalValueAfterOperations = function (operations) {
  return operations.reduce(
    (acc, currVal) => (currVal[1] === "+" ? ++acc : --acc),
    0
  );
};
