// console.log("working")
// const fs = require('fs')
// console.log(fs)

// fs.writeFileSync('note.txt','aman welcome to nodejs')
// fs.appendFileSync('note.txt',' hello')



//IMPORTING CORE MODULES 
// const add=require('./utils.js')
// const sum=add(3,4)

// console.log(sum)
// console.log(MyNotes)

// const method = getNotes.method()
// const method1 =getNotes.othermethods()
// console.log(method)
// console.log(method1)

// const val=require('validator')  //Npm core module


// const getNotes=require('./notes.js') // getting or importing our own module for use

// console.log(val.isEmail('amangmail.com'))
// console.log(val.isURL('https:/goog.com')) //by using npm core module we used a function called VALIDATOR

// const MyNotes=getNotes()
// console.log(MyNotes)







// Playing with NPM chalk Module

// const chalk=require('chalk')
// const { demandOption, require } = require('yargs')
// const { require } = require('yargs')
// console.log(chalk.green('success!'))
// console.log(chalk.blue('hello') + chalk.red(' aman'))
// console.log(chalk.underline.bgBlueBright('aman patil'))
// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// console.log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));

// const error=chalk.red
// const warning =chalk.yellow
// const primary =chalk.bold.black
// console.log(error('aman'))
// console.log(warning('your day will be amazing today'))
// console.log(primary('aman patil'))

// console.log(process.argv)
// console.log(process.argv[2])




// YARGS MODULE AND PACKAGE NOTE APP
const yargs = require('yargs')
const chalk = require('chalk')
// const { demandOption } = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')
const { addNote } = require('./notes.js')
const { demandOption } = require('yargs')


// const command=process.argv[2]



// CUSTOMIZED VARGS VERSION
yargs.version('1.1.0')


// CREATE ADD COMMAND
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.description)
        // console.log('Title : ' + argv.title)
        // console.log('Description :' + argv.description)

    }
})

// CREATE REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Title To Be Removed',
            demandOption: true,
            type: 'string'

        }

    },
    handler(argv) {
        notes.removeNote(argv.title)

        // console.log('removing a note', argv.title)
    }
})

// CREATE LIST COMMAND
yargs.command({
    command: 'list',
    describe: 'listing all the notes',
    handler(){
        notes.getNotes()
    }
})

// CREATE READ COMMAND
yargs.command({
    command: 'read',
    describe: 'reading the note',
    builder:{
        title:{
            describe:'reading notes',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})



// console.log(process.argv)
yargs.parse()
// console.log(yargs.argv)


// if(command==='add'){
//     console.log('added')
// } else if(command==='remove'){
//     console.log('removed')
// }


// const cmd=process.argv
// console.log(cmd[3])
