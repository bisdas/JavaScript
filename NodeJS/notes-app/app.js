const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
});


// create remove command
yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler(argv){
        notes.removeNote(argv.title)
    }
});



// create the list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log('Listing all notes!');
    }
});



// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading the note!');
    }
});


yargs.parse();
//console.log(yargs.argv);


//console.log(process.argv);
//console.log(yargs.argv);

// yargs.version('1.1.0');
// console.log(yargs.argv);

// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding note...!');
// }
// else if(command === 'remove'){
//     console.log('Removing note...!');
// }