/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import './perfil.css';
import { FaUser, FaCamera, FaPlus, FaEdit, FaTrash, FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import ButtonAppBarGreen from '../../components/ButtonAppBarGreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@mui/material/Modal';
import { TextField, Button, Grid, Card, Typography, CardContent, Box, IconButton, InputAdornment } from '@mui/material';
import { Close as CloseIcon, PhotoCamera as PhotoCameraIcon } from '@mui/icons-material';
import HomeButton from '../../components/HomeButton';

const Perfil: React.FC = () => {
  const [nome, setNome] = useState("Nome do Agricultor");
  const [dataNascimento, setDataNascimento] = useState("");
  const [bio, setBio] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openDicaModal, setOpenDicaModal] = useState(false);
  const [openReceitaModal, setOpenReceitaModal] = useState(false);
  const [produtos, setProdutos] = useState<{ nome: string; valor: string; quantidade: string; imagem: string | null, usuario: string }[]>([]);
  const [dicas, setDicas] = useState<{ titulo: string; texto: string; data: Date, usuario: string }[]>([]);
  const [receitas, setReceitas] = useState<{ titulo: string; texto: string; data: Date, usuario: string }[]>([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [quantidadeProduto, setQuantidadeProduto] = useState("");
  const [imagemProduto, setImagemProduto] = useState<string | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [buscaNome, setBuscaNome] = useState("");
  const [buscaDica, setBuscaDica] = useState("");
  const [buscaReceita, setBuscaReceita] = useState("");
  const [ordem, setOrdem] = useState<"asc" | "desc" | "">("");
  const [ordemDica, setOrdemDica] = useState<"asc" | "desc" | "">("");
  const [ordemReceita, setOrdemReceita] = useState<"asc" | "desc" | "">("");
  const [tituloDica, setTituloDica] = useState("");
  const [textoDica, setTextoDica] = useState("");
  const [tituloReceita, setTituloReceita] = useState("");
  const [textoReceita, setTextoReceita] = useState("");
  const [editDicaIndex, setEditDicaIndex] = useState<number | null>(null);
  const [editReceitaIndex, setEditReceitaIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedPerfil = localStorage.getItem('perfil');
    if (storedPerfil) {
      const perfil = JSON.parse(storedPerfil);
      setNome(perfil.nome);
      setDataNascimento(perfil.dataNascimento);
      setBio(perfil.bio);
      setFotoPerfil(perfil.fotoPerfil);
    }

    const storedProdutos = localStorage.getItem('produtos');
    if (storedProdutos) {
      setProdutos(JSON.parse(storedProdutos));
    }

    const storedDicas = localStorage.getItem('dicas');
    if (storedDicas) {
      setDicas(JSON.parse(storedDicas));
    }

    const storedReceitas = localStorage.getItem('receitas');
    if (storedReceitas) {
      setReceitas(JSON.parse(storedReceitas));
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setFotoPerfil(ev.target!.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleProdutoImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagemProduto(ev.target!.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const calcularIdade = (dataNascimento: string): number | null => {
    if (dataNascimento) {
      const hoje = new Date();
      const nascimento = new Date(dataNascimento);
      if (nascimento > hoje) {
        return null;
      }
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mesAtual = hoje.getMonth();
      const mesNascimento = nascimento.getMonth();
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--;
      }
      if (idade > 100) {
        idade = 100;
      }
      return idade;
    }
    return null;
  };

  const handleSave = () => {
    const perfil = { nome, dataNascimento, bio, fotoPerfil };
    localStorage.setItem('perfil', JSON.stringify(perfil));
    toast.success('Perfil salvo com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: '#4caf4f2f', color: '#000' }
    });
  };

  const openProdutoModal = () => {
    setNomeProduto("");
    setValorProduto("");
    setQuantidadeProduto("");
    setImagemProduto(null);
    setEditIndex(null);
    setOpenModal(true);
  };

  const openDicaModalHandler = () => {
    setTituloDica("");
    setTextoDica("");
    setEditDicaIndex(null);
    setOpenDicaModal(true);
  };

  const openReceitaModalHandler = () => {
    setTituloReceita("");
    setTextoReceita("");
    setEditReceitaIndex(null);
    setOpenReceitaModal(true);
  };

  const closeProdutoModal = () => {
    setOpenModal(false);
  };

  const closeDicaModalHandler = () => {
    setOpenDicaModal(false);
  };

  const closeReceitaModalHandler = () => {
    setOpenReceitaModal(false);
  };

  const formatarValor = (valor: string): string => {
    valor = valor.replace(/\D/g, '');
    const valorNumerico = parseInt(valor, 10) / 100;
    const valorFormatado = valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    return valorFormatado;
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setValorProduto(formatarValor(valor));
  };

  const getNomeUsuario = () => {
    const storedPerfil = localStorage.getItem('perfil');
    if (storedPerfil) {
      const perfil = JSON.parse(storedPerfil);
      return perfil.nome;
    }
    return 'Nome do Agricultor Padrão';
  };

  const handleSalvarProduto = () => {
    const usuario = getNomeUsuario();

    const novoProduto = {
      nome: nomeProduto,
      valor: valorProduto,
      quantidade: quantidadeProduto,
      imagem: imagemProduto,
      usuario: usuario
    };

    let novosProdutos;

    if (editIndex !== null) {
      novosProdutos = [...produtos];
      novosProdutos[editIndex] = novoProduto;
      toast.success('Produto atualizado com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' } // Estilo semelhante ao toast de salvar
      });
    } else {
      novosProdutos = [...produtos, novoProduto];
      toast.success('Produto cadastrado com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' }
      });
    }

    setProdutos(novosProdutos);
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));
    closeProdutoModal(); // Fecha o modal de cadastro de produto
  };

  const handleSalvarDica = () => {
    const usuario = getNomeUsuario();
    const novaDica = { titulo: tituloDica, texto: textoDica, data: new Date(), usuario: usuario };

    let novasDicas;

    if (editDicaIndex !== null) {
      novasDicas = [...dicas];
      novasDicas[editDicaIndex] = novaDica;
      toast.success('Dica atualizada com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' }
      });
    } else {
      novasDicas = [...dicas, novaDica];
      toast.success('Dica cadastrada com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' }
      });
    }

    setDicas(novasDicas);
    localStorage.setItem('dicas', JSON.stringify(novasDicas));
    closeDicaModalHandler();
  };

  const handleSalvarReceita = () => {
    const usuario = getNomeUsuario();
    const novaReceita = { titulo: tituloReceita, texto: textoReceita, data: new Date(), usuario: usuario };

    let novasReceitas;

    if (editReceitaIndex !== null) {
      novasReceitas = [...receitas];
      novasReceitas[editReceitaIndex] = novaReceita;
      toast.success('Receita atualizada com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' }
      });
    } else {
      novasReceitas = [...receitas, novaReceita];
      toast.success('Receita cadastrada com sucesso!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#4caf4f2f', color: '#000' }
      });
    }

    setReceitas(novasReceitas);
    localStorage.setItem('receitas', JSON.stringify(novasReceitas));
    closeReceitaModalHandler();
  };

  const handleEditarProduto = (index: number, produto: { nome: string; valor: string; quantidade: string; imagem: string | null, usuario: string }) => {
    setNomeProduto(produto.nome);
    setValorProduto(produto.valor);
    setQuantidadeProduto(produto.quantidade);
    setImagemProduto(produto.imagem);
    setEditIndex(index);
    setOpenModal(true);
  };

  const handleEditarDica = (index: number, dica: { titulo: string; texto: string, usuario: string }) => {
    setTituloDica(dica.titulo);
    setTextoDica(dica.texto);
    setEditDicaIndex(index);
    setOpenDicaModal(true);
  };

  const handleEditarReceita = (index: number, receita: { titulo: string; texto: string, usuario: string }) => {
    setTituloReceita(receita.titulo);
    setTextoReceita(receita.texto);
    setEditReceitaIndex(index);
    setOpenReceitaModal(true);
  };

  const handleExcluirProduto = (index: number) => {
    const novosProdutos = [...produtos];
    novosProdutos.splice(index, 1);
    setProdutos(novosProdutos);
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));
    toast.error('Produto excluído com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: '#f443362f', color: '#000' }
    });
  };

  const handleExcluirDica = (index: number) => {
    const novasDicas = [...dicas];
    novasDicas.splice(index, 1);
    setDicas(novasDicas);
    localStorage.setItem('dicas', JSON.stringify(novasDicas));
    toast.error('Dica excluída com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: '#f443362f', color: '#000' }
    });
  };

  const handleExcluirReceita = (index: number) => {
    const novasReceitas = [...receitas];
    novasReceitas.splice(index, 1);
    setReceitas(novasReceitas);
    localStorage.setItem('receitas', JSON.stringify(novasReceitas));
    toast.error('Receita excluída com sucesso!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: '#f443362f', color: '#000' }
    });
  };

  const handleBuscarNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscaNome(e.target.value);
  };

  const handleBuscarDicaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscaDica(e.target.value);
  };

  const handleBuscarReceitaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscaReceita(e.target.value);
  };

  const handleOrdenar = (tipo: "asc" | "desc") => {
    setOrdem(tipo);
  };

  const handleOrdenarDica = (tipo: "asc" | "desc") => {
    setOrdemDica(tipo);
  };

  const handleOrdenarReceita = (tipo: "asc" | "desc") => {
    setOrdemReceita(tipo);
  };

  const produtosFiltrados = [...produtos]
    .filter(produto => produto.nome.toLowerCase().includes(buscaNome.toLowerCase()))
    .sort((a, b) => {
      if (ordem === "asc") {
        return parseFloat(a.valor.replace(/[^0-9,-]+/g, "").replace(",", ".")) - parseFloat(b.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
      } else if (ordem === "desc") {
        return parseFloat(b.valor.replace(/[^0-9,-]+/g, "").replace(",", ".")) - parseFloat(a.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
      }
      return 0;
    });

  const dicasFiltradas = [...dicas]
    .filter(dica => dica.titulo.toLowerCase().includes(buscaDica.toLowerCase()))
    .sort((a, b) => {
      if (ordemDica === "asc") {
        return new Date(a.data).getTime() - new Date(b.data).getTime();
      } else if (ordemDica === "desc") {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
      }
      return 0;
    });

  const receitasFiltradas = [...receitas]
    .filter(receita => receita.titulo.toLowerCase().includes(buscaReceita.toLowerCase()))
    .sort((a, b) => {
      if (ordemReceita === "asc") {
        return new Date(a.data).getTime() - new Date(b.data).getTime();
      } else if (ordemReceita === "desc") {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
      }
      return 0;
    });

  const handleRemovePhoto = () => {
    setFotoPerfil("");
  };

  return (
    <>
      <ButtonAppBarGreen />
      <ToastContainer />
      <div className="perfil-container">
        <div className="perfil-card">
          <div className="avatar-container">
            {fotoPerfil ? (
              <img src={fotoPerfil} alt="Perfil" className="perfil-avatar" />
            ) : (
              <FaUser className="perfil-avatar" />
            )}
            <label htmlFor="file-input" className="upload-button">
              <FaCamera />
              <input
                id="file-input"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </label>
          </div>

          <h2>{nome}</h2>
          {dataNascimento && <p>Idade: {calcularIdade(dataNascimento)}</p>}
          <p>{bio}</p>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do agricultor"
          />
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de nascimento"
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Adicione uma biografia (máx. 80 caracteres)"
            rows={4}
            maxLength={80}
          />

          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={6} sm={5} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={handleSave}
                className='custom-save-button'
                variant="contained"
                sx={{
                  minWidth: '100px',
                  mr: { xs: 1, sm: 2 },
                }}
              >
                Salvar
              </Button>

              {fotoPerfil && (
                <Typography
                  className="remove-photo-text"
                  onClick={handleRemovePhoto}
                  component="p"
                  variant="body1"
                  sx={{
                    cursor: 'pointer',
                    marginLeft: { xs: 1, sm: 2 },
                  }}
                >
                  Remover foto
                </Typography>
              )}
            </Grid>
          </Grid>


        </div>
        <HomeButton />
      </div>
      <div className="perfil-container-prod">
        <div className="perfil-card-prod">
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Meus Produtos
            </Typography>
            <Button
              onClick={openProdutoModal}
              className='cadastrar-produto-btn'
              variant="contained"
              startIcon={<FaPlus />}
              sx={{
                backgroundColor: '#007E2F',
                color: '#fff',
                width: 'auto',
                float: 'right',
                '&:hover': {
                  backgroundColor: '#005C1F',
                },
                '&:active': {
                  backgroundColor: '#004415',
                },
                marginBottom: 2
              }}
            >
              Adicionar Novo Produto
            </Button>

            <TextField
              label="Buscar por nome"
              variant="outlined"
              type='email'
              fullWidth
              sx={{ marginBottom: 2 }}
              value={buscaNome}
              onChange={handleBuscarNomeChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleOrdenar("asc")}
                startIcon={<FaSortAmountDown />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', mr: 2, '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Menor Preço
              </Button>
              <Button
                variant="contained"
                onClick={() => handleOrdenar("desc")}
                startIcon={<FaSortAmountUp />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Maior Preço
              </Button>
            </Box>

            {produtosFiltrados.map((produto, index) => (
              <div key={index} className="produto-item">
                <Card sx={{ padding: 2, marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                  <Typography variant="h6">{produto.nome}</Typography>
                  <Typography variant="body1">Valor: {produto.valor}</Typography>
                  <Typography variant="body1">Quantidade: {produto.quantidade}</Typography>
                  <Typography variant="body2">Autor: {produto.usuario}</Typography>
                  {produto.imagem && <img src={produto.imagem} alt={produto.nome} style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} />}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '10px' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<FaEdit />}
                      onClick={() => handleEditarProduto(index, produto)}
                      sx={{ marginBottom: '8px' }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<FaTrash />}
                      onClick={() => handleExcluirProduto(index)}
                      sx={{ marginLeft: '10px', marginBottom: '8px' }}
                    >
                      Excluir
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </CardContent>
        </div>
      </div>

      {/* Card para as receitas ficarem salvas */}
      <div className="perfil-container-receita">
        <div className="perfil-card-receita">
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Minhas Receitas
            </Typography>
            <Button
              onClick={openReceitaModalHandler}
              className='cadastrar-produto-btn'
              variant="contained"
              startIcon={<FaPlus />}
              sx={{
                backgroundColor: '#007E2F',
                color: '#fff',
                width: 'auto',
                float: 'right',
                '&:hover': {
                  backgroundColor: '#005C1F',
                },
                '&:active': {
                  backgroundColor: '#004415',
                },
                marginBottom: 2
              }}
            >
              Adicionar Nova Receita
            </Button>

            <TextField
              label="Buscar por título"
              variant="outlined"
              type='email'
              fullWidth
              sx={{ marginBottom: 2 }}
              value={buscaReceita}
              onChange={handleBuscarReceitaChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleOrdenarReceita("asc")}
                startIcon={<FaSortAmountDown />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', mr: 2, '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Mais Antigas
              </Button>
              <Button
                variant="contained"
                onClick={() => handleOrdenarReceita("desc")}
                startIcon={<FaSortAmountUp />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Mais Recentes
              </Button>
            </Box>

            {receitasFiltradas.map((receita, index) => (
              <Card key={index} sx={{ padding: 2, marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <Typography variant="h6">{receita.titulo}</Typography>
                <Typography variant="body1">{receita.texto}</Typography>
                <Typography variant="body2">Autor: {receita.usuario}</Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<FaEdit />}
                    onClick={() => handleEditarReceita(index, receita)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaTrash />}
                    onClick={() => handleExcluirReceita(index)}
                  >
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </CardContent>
        </div>
      </div>

      {/* Card para as dicas ficarem salvas */}
      <div className="perfil-container-receita">
        <div className="perfil-card-receita">
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Minhas Dicas
            </Typography>
            <Button
              onClick={openDicaModalHandler}
              className='cadastrar-produto-btn'
              variant="contained"
              startIcon={<FaPlus />}
              sx={{
                backgroundColor: '#007E2F',
                color: '#fff',
                width: 'auto',
                float: 'right',
                '&:hover': {
                  backgroundColor: '#005C1F',
                },
                '&:active': {
                  backgroundColor: '#004415',
                },
                marginBottom: 2
              }}
            >
              Adicionar Nova Dica
            </Button>

            <TextField
              label="Buscar por título"
              variant="outlined"
              type='email'
              fullWidth
              sx={{ marginBottom: 2 }}
              value={buscaDica}
              onChange={handleBuscarDicaChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FaSearch />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleOrdenarDica("asc")}
                startIcon={<FaSortAmountDown />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', mr: 2, '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Mais Antigas
              </Button>
              <Button
                variant="contained"
                onClick={() => handleOrdenarDica("desc")}
                startIcon={<FaSortAmountUp />}
                sx={{ bgcolor: '#d7d7d7', color: '#000', '&:hover': { bgcolor: '#757575' }, '&:active': { bgcolor: '#616161' } }}
              >
                Mais Recentes
              </Button>
            </Box>

            {dicasFiltradas.map((dica, index) => (
              <Card key={index} sx={{ padding: 2, marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                <Typography variant="h6">{dica.titulo}</Typography>
                <Typography variant="body1">{dica.texto}</Typography>
                <Typography variant="body2">Autor: {dica.usuario}</Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<FaEdit />}
                    onClick={() => handleEditarDica(index, dica)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaTrash />}
                    onClick={() => handleExcluirDica(index)}
                  >
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </CardContent>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={closeProdutoModal}
        aria-labelledby="modal-cadastrar-produto"
        aria-describedby="modal-cadastrar-produto"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: 400, maxWidth: 600, p: 3, position: 'relative' }}>
          <IconButton
            sx={{ position: 'absolute', top: 8, left: 8 }}
            onClick={closeProdutoModal}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" align="center" gutterBottom>
            {nomeProduto ? 'Editar Produto' : 'Cadastrar Produto'}
          </Typography>
          <TextField
            id="nome-produto"
            label="Nome do Produto"
            type="email"
            fullWidth
            margin="normal"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            required
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              gap: 2
            }}
          >
            <TextField
              id="valor-produto"
              label="Valor"
              type="text"
              margin="normal"
              value={valorProduto}
              onChange={handleValorChange}
              required
              fullWidth
            />
            <TextField
              id="quantidade-produto"
              label="Quantidade"
              type="number"
              margin="normal"
              value={quantidadeProduto}
              onChange={(e) => setQuantidadeProduto(e.target.value)}
              required
              fullWidth
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 2,
              marginBottom: 2
            }}
          >
            <IconButton
              component="label"
              sx={{
                color: '#007E2F',
                '&:hover': { color: '#005C1F' },
                '&:active': { color: '#004415' }
              }}
            >
              <PhotoCameraIcon />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleProdutoImageChange}
              />
            </IconButton>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              Insira uma foto para o produto
            </Typography>
          </Box>
          {imagemProduto && <img src={imagemProduto} alt="Produto" style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} />}
          <Grid container justifyContent="flex-end" spacing={2} sx={{ marginTop: 2 }}>
            <Grid item>
              <Button onClick={handleSalvarProduto} variant="contained" sx={{ backgroundColor: '#007E2F', color: '#fff', '&:hover': { backgroundColor: '#005C1F' }, '&:active': { backgroundColor: '#004415' } }}>
                {editIndex !== null ? 'Salvar Alterações' : 'Salvar'}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>


      <Modal
        open={openDicaModal}
        onClose={closeDicaModalHandler}
        aria-labelledby="modal-cadastrar-dica"
        aria-describedby="modal-cadastrar-dica"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: 400, maxWidth: 600, p: 3, position: 'relative' }}>
          <IconButton
            sx={{ position: 'absolute', top: 8, left: 8 }}
            onClick={closeDicaModalHandler}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" align="center" gutterBottom>
            {tituloDica ? 'Editar Dica' : 'Cadastrar Dica'}
          </Typography>
          <TextField
            id="titulo-dica"
            label="Título da Dica"
            type='email'
            fullWidth
            margin="normal"
            value={tituloDica}
            onChange={(e) => setTituloDica(e.target.value)}
            required
          />
          <TextField
            id="texto-dica"
            label="Dica"
            type='text'
            fullWidth
            margin="normal"
            value={textoDica}
            onChange={(e) => setTextoDica(e.target.value)}
            multiline
            rows={4}
            required
          />
          <Grid container justifyContent="flex-end" spacing={2} sx={{ marginTop: 2 }}>
            <Grid item>
              <Button onClick={handleSalvarDica} variant="contained" sx={{ backgroundColor: '#007E2F', color: '#fff', '&:hover': { backgroundColor: '#005C1F' }, '&:active': { backgroundColor: '#004415' } }}>
                {editDicaIndex !== null ? 'Salvar Alterações' : 'Salvar'}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>

      <Modal
        open={openReceitaModal}
        onClose={closeReceitaModalHandler}
        aria-labelledby="modal-cadastrar-receita"
        aria-describedby="modal-cadastrar-receita"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ minWidth: 400, maxWidth: 600, p: 3, position: 'relative' }}>
          <IconButton
            sx={{ position: 'absolute', top: 8, left: 8 }}
            onClick={closeReceitaModalHandler}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" align="center" gutterBottom>
            {tituloReceita ? 'Editar Receita' : 'Cadastrar Receita'}
          </Typography>
          <TextField
            id="titulo-receita"
            label="Título da Receita"
            type='email'
            fullWidth
            margin="normal"
            value={tituloReceita}
            onChange={(e) => setTituloReceita(e.target.value)}
            required
          />
          <TextField
            id="texto-receita"
            label="Receita"
            type='text'
            fullWidth
            margin="normal"
            value={textoReceita}
            onChange={(e) => setTextoReceita(e.target.value)}
            multiline
            rows={4}
            required
          />
          <Grid container justifyContent="flex-end" spacing={2} sx={{ marginTop: 2 }}>
            <Grid item>
              <Button onClick={handleSalvarReceita} variant="contained" sx={{ backgroundColor: '#007E2F', color: '#fff', '&:hover': { backgroundColor: '#005C1F' }, '&:active': { backgroundColor: '#004415' } }}>
                {editReceitaIndex !== null ? 'Salvar Alterações' : 'Salvar'}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  );
};

export default Perfil;
