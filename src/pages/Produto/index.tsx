import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonAppBarGreen from "../../components/ButtonAppBarGreen";
import { Typography } from '@mui/material';


export default function Produto() {
  return (
    <>
      <ButtonAppBarGreen />
      <Box sx={{ width: '70%', margin: '5% auto'}}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Confira nossos produtos
      </Typography>
      <code>essa rota deve ser publica!!</code> 
        <Grid container spacing={4}> 
          {Array.from({ length: 24 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
        
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
