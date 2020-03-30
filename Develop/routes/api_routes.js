const notesDB = require("../db/db.json");

module.exports = function(app) {
    app.get('/api/notes', (req, res) => {
        res.json(notesDB);
    });    

    app.post('api/notes', (req, res) => {
        notesDB.push(req.body);
        res.json()
    });

    app.delete()
}