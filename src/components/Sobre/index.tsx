import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Sobre: React.FC = () => {
  return (
    <div style={{ margin: '50px auto', width: '70%' }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Sobre a GreenFarm
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom="40px">
        <Box style={{ padding: '10px', textAlign: 'justify' }}>
          <Typography variant="body1" paragraph>
            Bem-vindo à GreenFarm, a plataforma inovadora dedicada à promoção da agricultura sustentável e à segurança alimentar. Em um mundo onde a fome e a insegurança alimentar continuam a ser desafios globais, nossa missão é fornecer recursos e informações essenciais para agricultores, comunidades rurais e consumidores, promovendo práticas agrícolas sustentáveis e o acesso a alimentos saudáveis.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            <strong>Nossa Missão</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Na GreenFarm, acreditamos que a agricultura sustentável é a chave para um futuro melhor. Nossa missão é capacitar agricultores com conhecimento e ferramentas necessárias para adotarem práticas agrícolas que respeitem o meio ambiente, promovam a biodiversidade e garantam a produção de alimentos nutritivos e seguros. Ao fazer isso, visamos fortalecer as economias locais, melhorar a qualidade de vida nas comunidades rurais e contribuir para um mundo mais sustentável.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
          <strong>O que oferecemos?</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            A GreenFarm oferece uma variedade de recursos e funcionalidades projetadas para apoiar e incentivar práticas agrícolas sustentáveis:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Recursos Educativos:</strong> Fornecemos uma vasta gama de materiais educativos sobre agricultura sustentável, incluindo artigos, vídeos, tutoriais e guias práticos. Nossos recursos cobrem tópicos como manejo de solo, controle de pragas orgânicas, técnicas de irrigação sustentável, rotação de culturas e muito mais.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Suporte Técnico Especializado:</strong> Entendemos que cada agricultor enfrenta desafios únicos. Por isso, oferecemos suporte técnico personalizado, conectando agricultores com especialistas que podem fornecer orientação específica e soluções práticas para problemas agrícolas.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Comunidade Colaborativa:</strong> A GreenFarm é mais do que uma plataforma; é uma comunidade. Facilitamos a conexão entre agricultores, pesquisadores e especialistas, promovendo a troca de experiências e conhecimentos.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Ferramentas Interativas:</strong> Desenvolvemos uma série de ferramentas interativas que ajudam os agricultores a planejar e monitorar suas atividades agrícolas. Desde calendários de plantio até calculadoras de irrigação, nossas ferramentas são projetadas para tornar a agricultura sustentável mais acessível e eficiente.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Informações Nutricionais e Receitas Saudáveis:</strong> Além de promover a agricultura sustentável, também focamos na saúde e bem-estar dos consumidores. Oferecemos dicas de nutrição e receitas saudáveis que destacam os benefícios dos produtos agrícolas locais e sustentáveis.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            <strong>Nosso compromisso com a sustentabilidade</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Na GreenFarm, a sustentabilidade está no coração de tudo o que fazemos. Estamos comprometidos em reduzir o impacto ambiental da agricultura e promover práticas que conservem recursos naturais e protejam a biodiversidade.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            <strong>Parcerias e colaborações</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Reconhecemos que alcançar a sustentabilidade na agricultura é um esforço coletivo. Trabalhamos em parceria com universidades, instituições de pesquisa, ONGs e outras organizações comprometidas com a agricultura sustentável.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            <strong>Junte-se a nós</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            Convidamos você a fazer parte da GreenFarm e a se juntar à nossa missão de promover a agricultura sustentável e garantir a segurança alimentar. Seja você um agricultor, pesquisador, consumidor ou simplesmente alguém interessado em sustentabilidade, há um lugar para você em nossa comunidade.
          </Typography>
          <Typography variant="body1" paragraph>
            Juntos, podemos fazer a diferença. Juntos, podemos cultivar um futuro melhor. Bem-vindo à GreenFarm!
          </Typography>
        </Box>
        <Box style={{ width: '100%', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20210908/pngtree-photographs-of-farmers-harvesting-wheat-in-the-wheat-field-during-the-image_827167.jpg"
            alt="Imagem Sobre"
            style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '5px' }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Sobre;
