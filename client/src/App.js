import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";
import TextArea from "./components/TextArea";
// import myList from "./components/list";

function App() {
  const [notes, setNotes] = useState([]);
  const [showNote, setShowNote] = useState({});
  const [blankNote, setblankNote] = useState(false);
  // console.log("initial", blankNote);
  // const [toggleList, setToggleList] = useState(true)

  // function toggle_List() {
  //   setToggleList(toggleList=>!toggleList);
  // }


  function addNote(newNote) {
    // console.log(note)
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    axios.delete("/notes/" + id).
      then((response) => {
      console.log(response.data);
    });

    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note._id !== id;
      });
    });
  }

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const fetchdata = async () => {
      await axios
        .get("/notes")
        .then((res) => {
          console.log("within useeffect",res.data);
          setNotes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchdata();
  }, []);

  function show_Note(item) {
    setShowNote(item);
    add_blankNote(false);
  }
  //only setting to true so that when add button is clicked
  function add_blankNote(status) {
    console.log("add_new_note working before", blankNote);
    setblankNote(status);
  }

  return (
    // <Router>
      // <Route path="/">
      <div className="app">
        <div className="app__navbar"></div>
        <Navbar 
        add_Note={add_blankNote} 
        // show_List={toggle_List}  
        />

        <div className="app__content">
          
            <Lists
              list={notes}
              delete_Note={deleteNote}
              whenClicked={show_Note}
              // showList={toggleList}
            />

            <TextArea
              onAdd={addNote}
              display_note={showNote}
              add_Note={blankNote}
              // remove_Note={remove_blankNote}
              // whenClicked={show_Note}
            />

        </div>
      </div>
      // </Route>
    // </Router>
  );
}

export default App;
