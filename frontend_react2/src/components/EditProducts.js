import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name:name,
            price: price,
            description: description,
            image: image
            
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setImage(response.data.image)
            
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
       <Box component="form" sx={{ m: 1, width: '25ch'}} noValidate autoComplete="off" onSubmit={update}>
            <Typography component="h1" variant="h5" className='font-title' sx={{marginBottom:1, mt:3,
        }}>
             Editar Producto
           </Typography>

           <Grid container spacing={1.1} justifyContent="flex-end" >
                <Grid item>

            <TextField value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                    label="Nombre"
                    />
                </Grid>
                <Grid item>
                <TextField value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                    label="Descipción"
                    /> 

                </Grid>
                <Grid item>
                <TextField value={price}
                    onChange={ (e)=> setPrice(e.target.value)}
                    type='text'
                    className='form-control'
                    label="Precio"
                    />

                </Grid>
                <Grid item>
                <TextField value={image}
                    onChange={ (e)=> setImage(e.target.value)}
                    type='text'
                    className='form-control'
                    label="Imagen"
                    />

                </Grid>
            
            </Grid>

            <Button type='submit' variant="contained">
                        Editar
            </Button>
            

            

                    

                    
    
       </Box>
    )
}

export default EditProduct