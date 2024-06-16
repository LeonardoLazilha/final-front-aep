import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonAppBarGreen from "../../components/ButtonAppBarGreen";
import { Typography, Card, CardContent, CardMedia, TextField, Button, InputAdornment } from '@mui/material';
import { FaSearch, FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';
import Carousel from 'react-material-ui-carousel';

type ProdutoType = {
  nome: string;
  valor: string;
  quantidade: string;
  imagem: string | null;
  usuario: string;
};

type DicaType = {
  titulo: string;
  texto: string;
  data: Date;
  usuario: string;
};

type ReceitaType = {
  titulo: string;
  texto: string;
  data: Date;
  usuario: string;
};

const Produtos: React.FC = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [dicas, setDicas] = useState<DicaType[]>([]);
  const [receitas, setReceitas] = useState<ReceitaType[]>([]);
  const [buscaNome, setBuscaNome] = useState<string>("");
  const [ordem, setOrdem] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const produtosSalvosString = localStorage.getItem('produtos');
    if (produtosSalvosString) {
      const produtosSalvos = JSON.parse(produtosSalvosString) as ProdutoType[];
      setProdutos(produtosSalvos);
    }

    const dicasSalvasString = localStorage.getItem('dicas');
    if (dicasSalvasString) {
      const dicasSalvas = JSON.parse(dicasSalvasString) as DicaType[];
      setDicas(dicasSalvas);
    }

    const receitasSalvasString = localStorage.getItem('receitas');
    if (receitasSalvasString) {
      const receitasSalvas = JSON.parse(receitasSalvasString) as ReceitaType[];
      setReceitas(receitasSalvas);
    }
  }, []);

 
  const handleOrdenar = (tipo: "asc" | "desc") => {
    setOrdem(tipo);
  };

  const produtosFiltrados = [...produtos]
    .filter(produto =>
      produto.nome.toLowerCase().includes(buscaNome.toLowerCase()) ||
      produto.usuario.toLowerCase().includes(buscaNome.toLowerCase())
    )
    .sort((a, b) => {
      if (ordem === "asc") {
        return parseFloat(a.valor.replace(/[^0-9,-]+/g, "").replace(",", ".")) - parseFloat(b.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
      } else if (ordem === "desc") {
        return parseFloat(b.valor.replace(/[^0-9,-]+/g, "").replace(",", ".")) - parseFloat(a.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
      }
      return 0;
    });

  return (
    <>
      <ButtonAppBarGreen />
      <Box sx={{ width: '70%', margin: '5% auto' }}>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Confira nossos produtos
        </Typography>
        <TextField
          label="Buscar por nome do produto ou nome do agricultor"
          variant="outlined"
          value={buscaNome}
          onChange={(e) => setBuscaNome(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaSearch />
              </InputAdornment>
            )
          }}
          fullWidth
          sx={{ marginBottom: '1rem' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <Button
            variant="contained"
            onClick={() => handleOrdenar("asc")}
            startIcon={<FaSortAmountDown />}
            sx={{
              bgcolor: '#d7d7d7',
              color: ordem === "asc" ? '#000' : '#757575',
              marginRight: '0.5rem',
              '&:hover': { bgcolor: '#757575' },
              '&:active': { bgcolor: '#616161' }
            }}
          >
            Menor Preço
          </Button>
          <Button
            variant="contained"
            onClick={() => handleOrdenar("desc")}
            startIcon={<FaSortAmountUp />}
            sx={{
              bgcolor: '#d7d7d7',
              color: ordem === "desc" ? '#000' : '#757575',
              '&:hover': { bgcolor: '#757575' },
              '&:active': { bgcolor: '#616161' }
            }}
          >
            Maior Preço
          </Button>
        </Box>

        <Grid container spacing={4}>
          {produtosFiltrados.map((produto, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={produto.imagem || '/placeholder.jpg'}
                  alt={produto.nome}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {produto.nome}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Valor: R$ {produto.valor}, Quantidade: {produto.quantidade}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Registrado por: {produto.usuario}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: '2rem' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h4" gutterBottom align="center">
                Dicas
              </Typography>
              <Carousel>
                {dicas.map((dica, index) => (
                  <Card key={index} sx={{ padding: 2, marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <CardContent>
                      <Typography variant="h6">{dica.titulo}</Typography>
                      <Typography variant="body1">{dica.texto}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Data: {new Date(dica.data).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Autor: {dica.usuario}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h4" gutterBottom align="center">
                Receitas
              </Typography>
              <Carousel>
                {receitas.map((receita, index) => (
                  <Card key={index} sx={{ padding: 2, marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <CardContent>
                      <Typography variant="h6">{receita.titulo}</Typography>
                      <Typography variant="body1">{receita.texto}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Data: {new Date(receita.data).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Autor: {receita.usuario}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Produtos;
