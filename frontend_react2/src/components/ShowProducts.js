import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const endpoint = 'http://localhost:8000/api'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ShowProducts = () => {
  const [ products, setProducts ] = useState( [] )

  useEffect ( ()=> {
      getAllProducts()
  }, [])

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
    //console.log(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/product/${id}`)
    getAllProducts()
  }
  return (

 
    <TableContainer component={Paper}>
        <Button variant="contained">
            <Link to="/create"> Crear Producto</Link>

        </Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Imagen(g)</StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">{product.description}</StyledTableCell>
              <StyledTableCell align="right">{product.image}</StyledTableCell>
              <StyledTableCell align="right">
              <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                <Button onClick={ ()=>deleteProduct(product.id) } >Borrar</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShowProducts