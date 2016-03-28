'use strict';

const util = require('util');
const mkdirp = require('mkdirp');
const yeoman = require('yeoman-generator');

function AnsibleGenerator() {
  yeoman.Base.apply(this, arguments);
}
util.inherits(AnsibleGenerator, yeoman.Base);

AnsibleGenerator.prototype.configuring = function configuring() {
  const done = this.async();

  this.copy('main.pb.yml');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  if (this.useVault) {
    this.copy('vault.pass');
  }

  mkdirp.sync(this.destinationPath('group_vars'));
  mkdirp.sync(this.destinationPath('handlers'));
  mkdirp.sync(this.destinationPath('host_vars'));
  mkdirp.sync(this.destinationPath('roles'));
  mkdirp.sync(this.destinationPath('tasks'));
  mkdirp.sync(this.destinationPath('templates'));
  mkdirp.sync(this.destinationPath('vars'));

  done();
};

AnsibleGenerator.prototype.prompting = function prompting() {
  const done = this.async();

  this.prompt(require('./lib/prompts')(this), (answers) => {
    for (let k of Object.keys(answers)) {
      this[k] = answers[k];
    }

    done();
  });
};

AnsibleGenerator.prototype.writing = function writing() {
  const done = this.async();

  this.template('Readme.md');
  this.template('ansible.cfg');

  if (this.useEnvironments) {
    this.copy('hosts', 'hosts.dev');
    this.copy('hosts', 'hosts.qa');
    this.copy('hosts', 'hosts.prod');
  } else {
    this.copy('hosts');
  }

  done();
};

module.exports = AnsibleGenerator;
