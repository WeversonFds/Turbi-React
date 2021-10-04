import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addAllData } from 'store/lists/contacts'
import { setLoading } from 'store/commom/loading'
import { setAlert } from 'store/commom/alert'
import getData from 'api/getData'
import Load from 'components/commom/loading'
import ListNames from 'components/lists/listNames'
import ListForm from 'components/forms/listForm'
import Grid from '@mui/material/Grid';
import ListFilter from 'components/filter/listFilter'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography';


const Home = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.contacts.list)
    const loading = useSelector((state) => state.loading.loading)
    const alert = useSelector((state) => state.alert.alert)

    const consultApi = async () => {
        dispatch(setLoading(true))
        let result = await getData();
        dispatch(addAllData(result.data))
        dispatch(setLoading(false))
    }
    
    const handleClose = (event, reason) =>{
        console.log(event)
        dispatch(setAlert({'notification':false})) 
    }
    useEffect(() => {
        if(list.length === 1) consultApi()
    }, []);
        return(
            <>
            {alert.notification &&
                <Snackbar open={alert.notification} autoHideDuration={6000} onClose={() => handleClose()} >
                    <Alert severity={alert.type} sx={{width:'100%'}} >
                        {alert.message}
                    </Alert>
                </Snackbar>
                    }
                {loading && <Load/> }
                <Grid container alignItems={"center"} justifyContent={"center"} px={"50px"} pt="25px">
                    <Grid item md={8} xs={12}>
                        <ListFilter />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <ListNames />
                        <Typography sx={{ mt: 1}} variant="h2">
                            Novo contato
                        </Typography>
                        <ListForm />
                    </Grid>
                </Grid>
            </>
        )
}
export default Home