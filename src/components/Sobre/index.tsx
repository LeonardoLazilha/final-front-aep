import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Sobre: React.FC = () => {
  return (
    <div style={{ margin: '50px auto', width: '70%' }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Sobre a GreenFarm
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <div style={{ marginBottom: '10px', width: '100%', paddingRight: '20px', padding: '10px', textAlign: 'center' }}>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos dolore. Optio, alias quasi reprehenderit amet est cupiditate sapiente architecto ipsa, laudantium sint, veritatis itaque maiores adipisci exercitationem repudiandae. Deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est. Eum doloribus necessitatibus aut eius officiis officia, dolores explicabo quam distinctio odio vitae dolorum dicta obcaecati et assumenda laborum dolore?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ducimus molestias corrupti excepturi, itaque blanditiis vitae dolores, provident saepe ex possimus officia alias, ullam repudiandae dignissimos veniam quibusdam placeat rerum!
          </Typography>
        </div>
        <div style={{ width: '100%', height: '300px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20210908/pngtree-photographs-of-farmers-harvesting-wheat-in-the-wheat-field-during-the-image_827167.jpg" alt="Imagem Sobre" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '5px' }} />
        </div>
      </Box>
      {/* Segundo texto e imagem */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: 'column-reverse', sm: 'row-reverse' }}
        marginTop="50px"
      >
        <div style={{ marginBottom: '10px', width: '100%', paddingRight: '20px', padding: '10px', textAlign: 'center' }}>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos dolore. Optio, alias quasi reprehenderit amet est cupiditate sapiente architecto ipsa, laudantium sint, veritatis itaque maiores adipisci exercitationem repudiandae. Deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, est. Eum doloribus necessitatibus aut eius officiis officia, dolores explicabo quam distinctio odio vitae dolorum dicta obcaecati et assumenda laborum dolore?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ducimus molestias corrupti excepturi, itaque blanditiis vitae dolores, provident saepe ex possimus officia alias, ullam repudiandae dignissimos veniam quibusdam placeat rerum!
          </Typography>
        </div>
        <div style={{ width: '100%', height: '300px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20210908/pngtree-photographs-of-farmers-harvesting-wheat-in-the-wheat-field-during-the-image_827167.jpg" alt="Imagem Sobre" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '5px' }} />
        </div>
      </Box>
    </div>
  );
};

export default Sobre;
