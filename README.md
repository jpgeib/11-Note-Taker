# 11-HW-NoteTaker

### Description

The application will create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. The following HTML routes should be created:
GET /notes - Will return the notes.html file.
GET * - Will return the index.html file
The following API routes should be created:
GET /api/notes - Will read the db.json file and return all saved notes as JSON.
POST /api/notes - Will receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
DELETE /api/notes/:id - Will receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

### Pre-requisites
Clone my repo onto the local machine

Run "npm install"

### Running the application
by typing this in commandline prompt within the folder path /
```
node server.js

```




