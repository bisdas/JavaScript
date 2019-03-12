const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


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
    handler: function(argv){
        console.log('Title = ' + argv.title);
        console.log('Body = ' + argv.body);
    }
});


// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!');
    }
});



// create the list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes!');
    }
});



// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
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