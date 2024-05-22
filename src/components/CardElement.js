import { Box, Card } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import NoteIcon from '@mui/icons-material/Notes';

const CardElement = ({$element}) => {
  return (
<Card sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              padding: '6px',
              boxSizing: 'border-box', 
              cursor: 'pointer',
              gap: '6px'
            }}>
              {$element.name}
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px'
              }}>
                {$element.isFollowed && <VisibilityIcon color='action' sx={{fontSize: '16px'}} />}
                {$element.description !== '' && <NoteIcon color='action' sx={{fontSize: '16px'}} />}
              </Box>
            </Card>
  );
}

export default CardElement;
