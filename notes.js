console.log('note.js connected')
const { Console } = require('console')
const fs = require('fs')
const chalk = require('chalk')



const readNotes = function (title) {
    const note = loadNotes()
    const FindNotes = note.find((n) => n.title === title)

    if (!FindNotes) {
        console.log(chalk.red('No Note Found'))
    } else {
        console.log(chalk.blue(FindNotes.title))
        console.log(FindNotes.desc)

    }


}



const getNotes = function () {

    const note = loadNotes()
    console.log(chalk.blue('your notes'))

    note.forEach((element) => {
        console.log('Title:' + element.title)
        console.log('Description : ' + element.desc)

    });

}


const addNote = function (title, body) {
    // code
    const note = loadNotes()
    console.log(note)
    const DuplicateNotes = note.find((note) => note.title === title)

    // const DuplicateNote = note.filter(function (note) {
    //     return note.title === title

    // })
    // USING ARROW FUNCTION
    // const DuplicateNote = note.filter((note)=>note.title === title)

    if (!DuplicateNotes) {

        note.push({
            title: title,
            desc: body
        })
        saveNotes(note)
        console.log('Successfully Added !!')

    } else {
        console.log('Note Already Exist. Please Check The Title')

    }


}


const saveNotes = function (note) {
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)



}

const loadNotes = function () {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)


    } catch (e) {
        return []

    }


}

const removeNote = function (title) {
    // load existing notes
    const note = loadNotes()
    // to match the 
    console.log(note.length)
    const matchingRem = note.filter(function (n) {
        return n.title !== title
    })

    //USING ARROW FUNCTION
    // const matchingRem = note.filter( (n) => n.title !== title)

    console.log(matchingRem.length)
    if (note.length > matchingRem.length) {
        saveNotes(matchingRem)
        // console.log(note)
        console.log(chalk.green('Note Successsfully Removed '))

    } else {
        console.log(chalk.red('No Note Found'))

    }



}

// module.exports={
//     method:getNotes,
//     othermethods:newNotes
// }
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes
}
