const fs = require("fs");

const consoleRed = "\u001b[31m";
const consoleGreen = "\u001b[32m";
const consoleBold = "\u001b[1m";
const consoleThin = "\u001b[2m";
const consoleColorReset = "\u001b[0m";

const prefix = ["追加", "削除", "編集", "修正", "競合"];
const gitMessage = fs.readFileSync("./.git/COMMIT_EDITMSG", "utf8").trim();

console.log(`${consoleThin}"${gitMessage}"を確認しています…${consoleColorReset}`);

const doesMatched = prefix.some((str) => {
  const pattern = new RegExp(String.raw`^†${str}† .{1,60}`, "i");
  return gitMessage.match(pattern);
});

if (!doesMatched) {
  console.log(`${consoleRed}${consoleBold}†キレた†${consoleColorReset}`);
  console.log(`コミットメッセージの形式が合っていません`);
} else {
  console.log(`${consoleGreen}${consoleBold}†Approved†${consoleColorReset}`);
}

process.exit(!doesMatched);
