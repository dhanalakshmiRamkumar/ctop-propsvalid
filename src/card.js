import React , {useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  PropTypes  from 'prop-types';



export default function BasicCard(props) {
  const [render , setRender] = useState(true);

  useEffect(() => {
    return() => {
      console.log("Triggered at unmounting phase");
    }

  }, []);


  const handleToggle = () => {
    props.toggleComponent(render);
    setRender(!render)
  }

  return (
    <Card sx={{ Width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.subheadings}
        </Typography>
        <Typography variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2">
          {props.functionalities}
        </Typography>
      </CardContent>
          
      <CardActions>
         <Button size="small" onClick = {() => handleToggle()}>{props.buttonName}</Button>
      </CardActions>
    </Card>
  );
}


BasicCard.proptype = {
  subheadings: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  functionalities: PropTypes.string.isRequired,
  buttonName: PropTypes.string,
  toggleComponent: PropTypes.func
}