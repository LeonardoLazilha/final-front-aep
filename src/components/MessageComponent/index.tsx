import React from 'react';
import Typography from '@mui/material/Typography';

const MessageComponent = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '50px', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '70%', margin: '0 auto' }}>
      <Typography variant="h2" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Merriweather' }}>
        Bem-vindo ao GreenFarm: <br />
        Semeando um Futuro Sustentável
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: '#FFFFFF', fontFamily: 'Roboto', marginTop: '20px', fontSize: '1.6rem' }}>
        Junte-se a nós na GreenFarm, onde a agricultura encontra a inovação para criar um mundo mais verde e nutritivo. Como agricultor, esta é a sua plataforma para se conectar diretamente com os consumidores, compartilhar seus produtos, práticas sustentáveis e inspirar com receitas saudáveis.
      </Typography>
  
    </div>
    
  );
};

export default MessageComponent;
