const inquirer = require('inquirer');
const fs = require('fs');
let licenseChoices = ["GNU General Public License v3.0", "MIT License", "The Unlicense", "Mozilla Public License 2.0", "Boost Software License 1.0"];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of this application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this application?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'How would one be able to install this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license from the following options:',
        choices: licenseChoices
      }
  ])

  .then(function(data) {

  const fileName = `YourREADME.md`;
  fs.writeFile(fileName,
    `# ${data.title}!

    ## Description: 
    ${data.description}
    
    ## Table of Contents
    1. Installation(#Installation)
    2. Usage(#Usage)
    3. License(#License)
    4. Contributing(#Contributing)
    5. Tests(#Tests)
    6. Questions(#Questions)
    
    ## Installation
    ${data.instructions}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.test}

    ## Questions
    If you have any questions about this application or it's code, you may view it at github.com/${data.github} 
    You may also email me at ${data.email}. `
    
    , (err) => err ? console.error(err) : console.log("Thank you for your answers! Your README.md file has been created.")
    );
  });
