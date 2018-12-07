'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the wonderful ${chalk.red('generator-clasp')} generator!`)
    );

    const directoryName = this.destinationPath().split('/').slice(-1)[0]
    const directoryNameCap = directoryName.charAt(0).toUpperCase() + directoryName.slice(1)

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What is your app name',
        default: directoryNameCap
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.appName;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('src/_appName.ts'),
      this.destinationPath(`src/${this.props.appName}.ts`),
      this.props
    )
  }

  install() {
    this.installDependencies();
  }
};
