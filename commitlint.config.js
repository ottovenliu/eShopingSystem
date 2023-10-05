module.exports = {
  // 繼承的規則
  extends: ['@commitlint/config-conventional'],
  // 定義規則類型
  rules: {
    // type 類型定義，表示 git 提交的 type 必須在以下類型範圍內
    'type-enum': [
      2,
      'always',
      [
        'upd', // 更新某功能（不是 feat, 不是 fix）
        'feat', //新功能 feature
        'fix', // 修復 bug
        'refactor', // 重構(既不增加新功能，也不是修復bug)
        'docs', // 文檔註釋
        'chore', // 構建過程或輔助工具的變動
        'style', // 代碼格式(不影響代碼運行的變動)
        'revert', // 回退
        'perf', // 性能優化，透過ESLint又或是優化評分工具跑分完之後，所進行的變更
        'test', // 增加測試
        'build', // 打包
        'ci', // 關於CI/CD 相關設定或是檔案
        '3rd', // 增加第三方，所需套件的install或cdn的注入
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    // subject 大小寫不做校驗
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};
