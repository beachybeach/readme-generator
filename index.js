const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const data = () => {
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
      type: 'input',
      name: 'description',
      message: 'Description of the project.',
      validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Describe your project!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tech',
      message: 'Tech used in project',
      validate: tech => {
        if (tech) {
          return true;
        } else {
          console.log('What tech did you use to build this project?')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Contributors to the project',
      validate: credits => {
        if (credits) {
          return true;
        } else {
          console.log('Who helped you build this project?')
          return false;
        }
      }
    }
  ]);
}

const writeToFile = (data, err) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', data, err => {
      if (err) {
        reject(err)
        return;
      }
      resolve({
        ok: true,
        message: 'Your readme has been created!'
      });
    });
  });
}

data()
  .then(generateMarkdown)
  .then(writeToFile)
  .catch(err => {
    if (err) throw err;
  });