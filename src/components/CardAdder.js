import { Box, Button, Card } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const CardAdder = ({$handleValidate, $handleCancel}) => {
  const [title, setTitle] = useState("");

  const handleValidate = () => {
    if(title !== '') {
      $handleValidate(title);
      setTitle("");
    }
  }

  return <Box sx={{maxWidth: '256px', width: '100%', color: '#0000008a', minHeight: '62px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
    <Card>
      <textarea style={{minWidth: '100%', maxWidth: '100%', minHeight: '62px', border: 'none', outline: 'none', padding: '6px 6px 0 6px', boxSizing: 'border-box'}} placeholder="Saisissez un titre pour cette carte..." value={title} onChange={(e) => setTitle(e.target.value)} />
    </Card>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '6px'
    }}>
      <Button           
          variant='contained' 
          color='success' 
          sx={{
            maxWidth: '156px',
            backgroundColor: '#5aac44',
            height: '32px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#61bd4f', 
            }
          }}
          onClick={handleValidate}
        >
        Ajouter une carte
      </Button>
      <CloseIcon sx={{cursor: 'pointer'}} color='action' onClick={$handleCancel}/>
    </Box>
  </Box>
};

export default CardAdder;