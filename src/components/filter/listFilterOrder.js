import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  listOrder } from 'store/lists/contacts'
import { useDispatch } from 'react-redux'
const ListFilterOrder = () => {


    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(listOrder(event.target.value))
    };
    return (
      <FormControl component="fieldset">
        <Typography sx={{ mt: 1}} variant="h3" >
            Ordenar contatos
        </Typography>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleChange}
        >
        <Box sx={{ display: 'flex' }}>
          <FormControlLabel sx={{fontSize:"10px"}}  value="1" control={<Radio />} label="Crescente" />
          <FormControlLabel value="-1" control={<Radio />} label="Decrescente" />
          </Box>
        </RadioGroup>
      </FormControl>
    );
  }
export default ListFilterOrder
  