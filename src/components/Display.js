import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import classes from "./Create.module.css"
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { upDate } from '../store/Data';
import { db } from "../firebase";
import { ref, remove} from "firebase/database";



const Display=(props)=> {
  const dispatch = useDispatch();
  const deleteHandler = (note) => {
    console.log(note.uid)
    remove(ref(db, `/${note.uuid}`));
  };
  const editHandler=(note)=>{
    console.log(note);
    dispatch(upDate(note));
  }
  return (
    <Box sx={{ maxWidth: 255}}>
      <Card variant="outlined" className={classes.Card}>
      <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {props.notes.title}
      </Typography>
      <Typography variant="body2" className={classes.content}>
      {props.notes.detail}
      </Typography>
    </CardContent>
      </Card>
    <CardActions>
    <Link to={`/${props.notes.title}`}>
      <Button size="small" onClick={()=>editHandler(props.notes)}>Learn More</Button></Link>
      <IconButton aria-label="delete" size="small" onClick={()=>deleteHandler(props.notes)}>
        <DeleteIcon fontSize="medium"  />
      </IconButton>
      <IconButton onClick={()=>editHandler(props.notes)}>
      <ModeEditIcon fontSize="medium"/>
      </IconButton>
    </CardActions>
    </Box>
  );
}
export default Display;
