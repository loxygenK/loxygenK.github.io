const fs = require("fs");

const prefix = ["追加", "削除", "編集", "修正", "競合"];
const gitMessage = fs.readFileSync("./.git/COMMIT_EDITMSG", "utf8").trim();

console.log(`"${gitMessage}"を確認しています…`);

const doesMatched = prefix.some((str) => {
  const pattern = new RegExp(String.raw`^†${str}† .{1,60}`, "i");
  return gitMessage.match(pattern);
});

if (!doesMatched) {
  console.log("†キレた†");
  console.log("コミットメッセージの形式が合っていません");
} else {
  console.log("†Approved†");
}

process.exit(!doesMatched);
