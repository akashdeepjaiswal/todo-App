const router = require('express').Router();
let Note = require('../models/note.model');

//get all notes
router.route('/').get((req, res) => {
    // res.send("working");
// db.users.find({"name": /.*m.*/})
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add notes
router.route('/add').post((req, res) => {
//   const username = req.body.username;
const title = req.body.title;
const content = req.body.content;

  const newNote = new Note({
      title,
      content
    });

  newNote.save()
    .then(() => res.json('Note added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get note by id
router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  // delete note by id
  router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Note deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  //update note by id
  router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
      .then(note => {
        note.title= req.body.title;
        note.content = req.body.content;

        note.save()
          .then(() => res.json('Note updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;