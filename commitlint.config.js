module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['style', 'template', 'integration', 'logical', 'test', 'lib', 'arch']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
  },
};
