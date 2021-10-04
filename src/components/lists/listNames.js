import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { removeData } from 'store/lists/contacts'
import { setAlert } from 'store/commom/alert'
import Slide from "@material-ui/core/Slide"


export default function InteractiveList() {
    const dispatch = useDispatch()
    const listItems = useSelector((state) => state.contacts.list)
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);

    const onDelete = (id) => {
      dispatch(removeData(id));
      dispatch(setAlert({'notification':true, 'type':'success', 'message':'Contato removido com sucesso'}))
    }
  return (
    <>
    {(listItems.length > 0) &&
    <Box>
        <Grid>
          <Typography sx={{ mt: 1}} variant="h2" >
            Lista de contatos
          </Typography>
            <List dense={dense} style={{overflow:'auto' , maxHeight:"calc(100vh - 286px)",}}>
                {listItems.map((element, id) => (
                    <Slide direction="right" in="true" mountOnEnter unmountOnExit timeout={500} key={id}>
                        <ListItem sx={{'&:hover':{boxShadow: '23px 8px 9px -1px rgb(0 0 0 / 19%)'}, my:"10px", borderRadius:'10px',}}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete"  onClick={() => onDelete(element.id) }>
                            <DeleteIcon  />
                            </IconButton>
                        }
                        >
                        <PersonOutlineOutlinedIcon style={{paddingRight: '15px'}} />
                        <ListItemText
                            primary={element.name}  
                            secondary={element.email}
                        />
                        </ListItem>
                    </Slide>
                ))}
            </List>
        </Grid>
    </Box>
    }
    </>
  );
}