import { Box, Card, List, Button, Alert, AlertTitle } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import CardElement from './CardElement';
import { useState } from 'react';
import CardAdder from './CardAdder';


const SingleListCard = ({$list, $index, $deleteList, $addCard}) => {
  const [addCardInputOpen, setAddCardInputOpen] = useState(false);

  const handleDeleteList = () => {
    const proceed = window.confirm(`Vous allez supprimer la liste nommée ${$list.name}.\nAppuyez sur "OK" pour continuer.\nAppuyez sur "Annuler" pour fermer.`);
    if(proceed) {
      $deleteList($index);
    }
  };

  const handleAddCard = (title) => {
    setAddCardInputOpen(false);
    $addCard($index, title);
  }

  const handleCloseAddCard = () => {
    setAddCardInputOpen(false);
  }

  return <Card sx={{
    width: '272px', 
    flex: 1,
    backgroundColor: '#ebecf0',
    fontSize: '14px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
  }}>
    <Box sx={{
      padding: '8px',
      fontWeight: 600,
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {$list.name}
      <MoreHorizIcon color='action' sx={{fontSize: '18px', cursor: 'pointer'}} onClick={handleDeleteList}/>
    </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {$list.cards && $list.cards.map((element) => <CardElement key={element.id} $element={element} />)}
        <Box sx={{display: 'flex'}}> 
      {addCardInputOpen ? <CardAdder $handleValidate={handleAddCard} $handleCancel={handleCloseAddCard} /> : <Button sx={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        gap: '6px', 
        textTransform: 'none', 
        width: '272px',
        backgroundColor: '#ebecf0',
        color: '#0000008a',
        '&:hover': {
          backgroundColor: '#d4d6da',
        },
      }}
        onClick={() => {setAddCardInputOpen(true)}}
      >
        <AddIcon sx={{fontSize: '18px'}} />
        Ajouter une autre carte
      </Button>}
    </Box>
      </List>
    </Card>
}

export default SingleListCard;