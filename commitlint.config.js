module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": ["創世", "追加", "編集", "削除", "修正", "競合"],
  },
};
