const notesDB = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
    app.get('/api/notes', (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, response) => {
            //convert the response to JSON
            let allNotes = JSON.parse(response);
            console.log("Retrieving data");
            res.json(allNotes);
        });
    });

    app.post('/api/notes', (req, res) => {
        fs.readFile("./db/db.json", "utf8", (err, response) => {
            //convert the response to JSON
            let allNotes = JSON.parse(response);
            console.log("Adding a note", allNotes);
            const newNote = req.body;
            allNotes = [...allNotes, newNote];
            console.log(allNotes);
            // notesDB.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(allNotes), err => {
                if (err) throw res.status(500).json(err);
                res.json();
            });
        });
    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log("Deleting a note");
        fs.readFile("./db/db.json", "utf8", (err, response) => {
            //convert the response to JSON
            let allNotes = JSON.parse(response);
            const deletedNote = allNotes.filter(note => {
                note.id != req.params.id;
            });
            fs.writeFile("./db/db.json", JSON.stringify(deletedNote), err => {
                if (err) throw res.status(500).json(err);
                res.json(deletedNote);
            });
        });
    });

};