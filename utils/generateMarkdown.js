const generateMarkdown = data => `
# ${data.title}
\n\
## Description
\n\
${data.description}
\n\
## Tech
\n\
${data.tech}
\n\
## Credits
\n\
${data.credits}
\n\
`;

module.exports = generateMarkdown;
