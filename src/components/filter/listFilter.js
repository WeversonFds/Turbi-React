import ListFilterOrder from './listFilterOrder'
import ListFilterQuery from './listFilterQuery'
import Grid from '@mui/material/Grid';
const ListFilter = () => {
 return(
     <>
     <Grid container justifyContent="space-between">
        <ListFilterOrder />
        <ListFilterQuery />
    </Grid>
     </>
 )
}
export default ListFilter