import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  listQuery } from 'store/lists/contacts'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
const ListFilterOrder = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(listQuery(event.target.value))
    };
    return (
    <Box component="form" noValidate autoComplete="off">
        <Typography sx={{ mt: 1}} variant="h3" >
            Buscar contato
        </Typography>
        <TextField  size="small" label="Nome" variant="standard" onChange={handleChange}/>
    </Box>
    );
  }
export default ListFilterOrder
  