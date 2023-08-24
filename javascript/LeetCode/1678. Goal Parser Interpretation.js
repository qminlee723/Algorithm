var interpret = function (command) {
  command = command.replaceAll("(al)", "al");
  command = command.replaceAll("()", "o");
  return command;
};
