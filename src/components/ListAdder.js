import { Box, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const ListAdder = ({$handleValidate, $handleCancel}) => {
  const [title, setTitle] = useState("");

  const handleValidate = () => {
    if(title !== '') {
      $handleValidate(title);
      setTitle("");
    }
  }

  return <Card sx={{maxWidth: '272px', color: '#0000008a', minHeight: '62px', display: 'flex', flexDirection: 'column', gap: '6px', padding: '6px'}}>
    <TextField
      hiddenLabel
      variant="outlined"
      size="small"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
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
        Ajouter une liste
      </Button>
      <CloseIcon sx={{cursor: 'pointer'}} color='action' onClick={$handleCancel}/>
    </Box>
  </Card>
};

export default ListAdder;