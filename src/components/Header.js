import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%', 
        height: '40px', 
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          opacity: 0.5,
          '&:hover': {
            opacity: 0.7
          }
        }}
      >
        <img height='30px' src='logo_trello.png'/>
      </Box>
    </Box>
  );
}

export default Header;
