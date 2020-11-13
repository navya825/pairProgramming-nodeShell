const pwd = require("./pwd");
const ls = require("./ls");
const catt = require("./fs");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd.split(" ")[0] === "cat") {
    catt(cmd.split(" ")[1]);
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
