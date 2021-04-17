const inquirer = require('inquirer');
const fs = require('fs');
let licenseChoices = ["GNU General Public License v3.0", "MIT License", "The Unlicense", "Mozilla Public License 2.0", "Boost Software License 1.0"];
let badges;

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

    if (data.license === "GNU General Public License v3.0") {
      badges = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (data.license === "MIT License") {
      badges = `[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (data.license === "The Unlicense") {
      badges = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org/)`;
    } else if (data.license === "Mozilla Public License 2.0") {
      badges = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)`;
    } else if (data.license === "Boost Software License 1.0") {
      badges = `[![License: BOOST 1.0](https://img.shields.io/badge/License-Boost%201.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    }

  const fileName = `YourREADME.md`;
  fs.writeFile(fileName,
    `# ${data.title}! ${badges}

    ## Description: 
    ${data.description}
    
    ## Table of Contents
    1. [Installation] (#Installation)
    2. [Usage] (#Usage)
    3. [License] (#License)
    4. [Contributing] (#Contributing)
    5. [Tests] (#Tests)
    6. [Questions] (#Questions)
    
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
