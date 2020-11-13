process.stdout.write("prompt > ");

process.stdin.on("data", () => {
  // const pwd = process.execPath;
  process.stdout.write(process.execPath);
  process.stdout.write("\nprompt > ");
});
