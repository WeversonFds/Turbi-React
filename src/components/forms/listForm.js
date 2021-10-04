import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addData } from 'store/lists/contacts'
import { setAlert } from 'store/commom/alert'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import cleanObject from 'utils/cleanObject'

export default function FormList() {
    const dispatch = useDispatch()
    const [formData, setformData] = useState({})
    const addValue = (e) =>{
        e.preventDefault();
        if(!formData.name || !formData.email){ 
            dispatch(setAlert({'notification':true, 'message': "Preencha o nome e o e-mail", 'type':'error'}));
            return 
        }
        dispatch(addData(formData));
        dispatch(setAlert({'notification':true, 'message': "Contato adicionado com sucesso", 'type':'success'}));
        setformData(cleanObject(formData))
    }
    return(
        <>
            <form onSubmit={(event) => addValue(event)} >
                <Grid container alignItems={"center"}>
                    <Grid item md={4} xs={5}>
                        <TextField  size="small" label="Nome" variant="standard" value={formData.name} onChange={(e) => setformData({...formData, 'name':e.target.value})}/>
                    </Grid>
                    <Grid item md={4} xs={5}>
                        <TextField  size="small" label="Email" variant="standard" value={formData.email} onChange={(e) => setformData({...formData, 'email':e.target.value})}/>
                    </Grid>
                    <Grid item md={12} xs={12} mt={"10px"}>
                        <Button variant="outlined" type="submit">Adicionar contato</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}