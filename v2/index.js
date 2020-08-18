const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');
const path = require('path');


let contents = [
    { label: 'Project Title', heading: '#', input: '' },
    { label: 'Getting Started', heading: '##', input: '' },
    { label: 'Prerequisites', heading: '###', input: '' },
    { label: 'Installing', heading: '###', input: '' },
    { label: 'Running Tests', heading: '##', input: '' },
    { label: 'Deployment', heading: '##', input: '' },

]
console.log(`Please enter your readm file content below. \nLeave black to ignore the section`);

contents.forEach(
    (content) => {
        content.input = prompt(`${content.label}: `);
    }
)

contents.forEach(
    (content) => {
        if (content.input) {
            fs.appendFile(
                path.join(__dirname, 'README.md'), `${content.heading}${content.label} \n${content.input}\n\n`,
                err => {
                    if (err) throw err;
                    console.log(`Added ${content.label}...`);
                }
            )
        }
    }
)
console.log('Your readme file is ready');
