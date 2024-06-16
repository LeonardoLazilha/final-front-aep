import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [signupError, setSignupError] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSignupName('');
    setSignupEmail('');
    setConfirmEmail('');
    setSignupPassword('');
    setConfirmPassword('');
    setDateOfBirth('');
    setCpf('');
    setSignupError(null);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fff' }}>
        <Container maxWidth="sm" sx={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '60px', paddingRight: '60px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Faça Login ou Cadastre-se
          </Typography>
          <Card variant="outlined" sx={{ padding: '30px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
            <CardContent>
              <form noValidate autoComplete="off">
                <TextField
                  id="email"
                  label="E-mail"
                  type="email"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Senha"
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                  <Link to="/perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Entrar
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={handleOpenModal}
                  sx={{
                    marginTop: '10px',
                    backgroundColor: '#007E2F',
                    '&:hover': {
                      backgroundColor: '#00582B',
                    },
                    '&:active': {
                      backgroundColor: '#004415',
                    },
                  }}
                >
                  Não possui uma conta?
                </Button>
                <Typography
                  component={Link}
                  to="/"
                  variant="body1"
                  sx={{
                    cursor: 'pointer',
                    marginTop: '8px', // Definindo uma margem pequena de 8px
                    color: 'inherit',
                    display: 'inline-block', // Para ocupar apenas o espaço necessário
                  }}
                >
                  Voltar a Home
                </Typography>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', minWidth: '400px', maxWidth: '600px', borderRadius: '5px' }}>
          <IconButton
            aria-label="Fechar"
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" id="modal-modal-title" align="center" gutterBottom>
            Cadastre-se
          </Typography>
          <form>
            <TextField
              id="signup-name"
              label="Nome completo"
              type="email"
              fullWidth
              margin="normal"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              required
            />
            <TextField
              id="signup-email"
              label="E-mail"
              type="email"
              fullWidth
              margin="normal"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
            <TextField
              id="confirm-email"
              label="Confirmar E-mail"
              type="email"
              fullWidth
              margin="normal"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
            <TextField
              id="signup-password"
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            <TextField
              id="confirm-password"
              label="Confirmar Senha"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <TextField
              id="date-of-birth"
              label="Data de Nascimento"
              type="date"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
            <TextField
              id="cpf"
              label="CPF"
              type="email"
              fullWidth
              margin="normal"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            {signupError && (
              <Typography variant="body2" color="error" align="center" gutterBottom>
                {signupError}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#007E2F',
                '&:hover': {
                  backgroundColor: '#00582B',
                },
                '&:active': {
                  backgroundColor: '#004415',
                },
              }}
            >
              <Link to="/perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
                Cadastrar
              </Link>
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
