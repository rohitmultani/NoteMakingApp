import {Fragment,useState,useEffect} from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import classes from "./Create.module.css"
import { db } from "../firebase";
import { uid } from "uid";
import { useSelector, useDispatch } from 'react-redux';
import { upDate } from '../store/Data';
import { set, ref, onValue, remove, update } from "firebase/database";
const CreateNote=()=>{
  const dispatch = useDispatch();
    const notes = useSelector((state) => state);
    const [title,setTitle]=useState();
    const [detail,setDetails]=useState();
    const [isEdit,setIsEdit]=useState(true);
    const onChangeTitleHandler=(e)=>{
            setTitle(e.target.value)
    }
    const onChangeDetailHandler=(e)=>{    
            setDetails(e.target.value)
    }
    useEffect(()=>{
     if(notes[0]){
      setTitle(notes[0].title);
      setDetails(notes[0].detail);
setIsEdit(true)
     }
    },[notes])
    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
          title,
          detail,
          uuid,
        });
    
        setTitle("");
        setDetails("");
      };
      const updateHandler=()=>{
        // setTitle(notes.title);
        // setDetails(notes.detail);
        // console.log(notes.uuid)
        
        
        update(ref(db, `/${notes[0].uuid}`), {
            title,
            detail,
            uuid:notes[0].uuid,
          });
          dispatch(upDate([]));
          setTitle("");
          setDetails("");
        //   setIsEdit(false);
        console.log(notes[1])
      }
    return (
        <Fragment>
           <div className={classes.f1}>
              <div className={classes.heading}> Create Notes </div>
              <Stack spacing={1}>
            <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  placeholder='Add Title'
  variant="filled"
  fullWidth
  size="small"
  value={title}
  onChange={onChangeTitleHandler}
/>
<TextField
  hiddenLabel
  fullWidth
  placeholder='Add Details'
  id="filled-hidden-label-normal"
  variant="filled"
  value={detail}
  onChange={onChangeDetailHandler}
  
/>
<Button variant="contained" className={classes.btn}  onClick={writeToDatabase}>Add</Button>
{isEdit?
<Button variant="contained" className={classes.btn}  onClick={updateHandler}>update</Button>:
""
}
</Stack>
</div>
        </Fragment>
    )
}
export default CreateNote;