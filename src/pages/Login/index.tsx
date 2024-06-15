import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonAppBarLogin from '../../components/ButtonAppBarGreen';


export default function Login() {
  return (
    <><ButtonAppBarLogin />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fff' }}>
      <Container maxWidth="sm" sx={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '60px', paddingRight: '60px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Faça Login ou Cadastre-se
        </Typography>
        <Card variant="outlined" sx={{ padding: '30px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <form noValidate autoComplete="off">
              <TextField
                id="email"
                label="E-mail"
                type="email"
                fullWidth
                margin="normal" />
              <TextField
                id="password"
                label="Senha"
                type="password"
                fullWidth
                margin="normal" />
              <Button variant="contained" color="primary" fullWidth>
                Entrar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                  marginTop: '10px',
                  backgroundColor: '#007E2F',
                  '&:hover': {
                    backgroundColor: '#00582B', // Verde escuro
                  },
                }}
              >
                Não possui uma conta? Crie uma
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div></>
  );
}
