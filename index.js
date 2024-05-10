// index.js
// Dynamically import inquirer
import('inquirer').then(inquirer => {
    const fs = require('fs');
    const { generateSVG } = require('./lib/generateSVG');
  
    async function promptUser() {
      const questions = [
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: input => input.length <= 3
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a color for the text (keyword or hex):'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a color for the shape (keyword or hex):'
        }
      ];
      return inquirer.default.prompt(questions);  // Ensure to use the default export of inquirer
    }
  
    function saveSVGFile(content) {
      fs.writeFileSync('./examples/logo.svg', content);
      console.log('Generated logo.svg');
    }
  
    async function main() {
      try {
        const answers = await promptUser();
        const svgData = generateSVG(answers);
        saveSVGFile(svgData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    main();
  }).catch(error => {
    console.error('Error importing inquirer:', error);
  });
  