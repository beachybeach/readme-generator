const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

cosnt data = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of the project.',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('What is the name of your project?')
          return false;
        }
      }
    },
    {

    }
  ])
}