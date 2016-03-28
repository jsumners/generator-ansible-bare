'use strict';

module.exports = function p(instance) {
  const prompts = [];
  const confirmValidate = (input) => input.toLowerCase() === 'y';

  prompts.push({
    type: 'confirm',
    name: 'runAsRoot',
    message: 'Run playbooks as root:',
    validate: confirmValidate,
    default: true
  });

  prompts.push({
    type: 'confirm',
    name: 'useEnvironments',
    message: 'Use multiple environments:',
    validate: confirmValidate,
    default: false
  });

  prompts.push({
    type: 'confirm',
    name: 'useVault',
    message: 'Use ansible vault:',
    validate: confirmValidate,
    default: false
  });

  return prompts;
};
