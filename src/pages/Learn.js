import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Learn = () => {
  const notes = useSelector((state) => state);
  return (
    <Fragment>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {notes[0].title}
            </Typography>

            <Typography variant="body2">{notes[0].detail}</Typography>
          </CardContent>
         <Link to="/">
        <Button variant="contained">Back</Button></Link>
        </Card>
      </Box>
    </Fragment>
  );
};
export default Learn;
