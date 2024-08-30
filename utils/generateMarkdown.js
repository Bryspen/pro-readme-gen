// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  }
   else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD') {
    return '[BSD](https://opensource.org/licenses/BSD-3-Clause)';
  }
   else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, response) {
  const now = new Date();
  const currentYear = now.getFullYear();
  if (license === 'MIT') {
    return `This project is licensed under the MIT license, Copyright ${currentYear} to present.`;
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache license, Version 2.0.`;
  } else if (license === 'GPL') {
    return  `This project is licensed under the GPL license, Version 3.0.`;
  } else if (license === 'BSD') {
    return `This project is licensed under the BSD license, Version 3.0.`;
  }
   else {
    return 'This project is not licensed.';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const licenseBadge = renderLicenseBadge(response.license);
  const licenseLink = renderLicenseLink(response.license);
  const licenseSection = renderLicenseSection(response.license);

  return `# ${response.title}
  ${licenseBadge}
## Description
  ${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation 
  ${response.installation}
## Usage 
  ${response.usage}
## Credits
  ${response.credits}
## License
  ${licenseSection}
## Contributing
  ${response.contributing}
## Tests
  ${response.tests}
## Questions
  GitHub - [${response.github}](github.com/${response.github})\n
  Email - [${response.email}](${response.email})\n
  License - [${response.license}](${licenseLink})`;
}

export default generateMarkdown;
