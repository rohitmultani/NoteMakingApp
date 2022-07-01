import { Fragment } from "react";
import Display from "./Display";
import Stack from "@mui/material/Stack";
import classes from "./Create.module.css";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
const Cards = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setNotes([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((note) => (
          setNotes((oldArray) => [...oldArray, note])
        ));
      }
    });
  }, []);

  return (
    <Fragment>
      <Stack direction="row" spacing={1} className={classes.stack}>
        {notes.map((note) => (
          <Display notes={note} />
        ))}
      </Stack>
    </Fragment>
  );
};
export default Cards;
