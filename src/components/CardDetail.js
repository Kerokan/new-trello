import { Box, Button, Card, Dialog } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

const CardDetail = ({$card, $listTitle, $open, $onClose, $editCard, $deleteCard}) => {
  const [description, setDescription] = useState("");
  const [changeDescription, setChangeDescription] = useState(false);

  const handleFollow = () => {
    $editCard({
      ...$card,
      isFollowed: !$card.isFollowed,
    });
  };

  const handleChangeDescription = () => {
    $editCard({
      ...$card,
      description
    });
    setChangeDescription(false);
  }

  const deleteCard = () => {
    const proceed = window.confirm(`Vous allez supprimer la carte nommée ${$card.name}.\nAppuyez sur "OK" pour continuer.\nAppuyez sur "Annuler" pour fermer.`);
    if(proceed) {
      $deleteCard($card.id);
    }
  };

  const handleCancel = () => {
    setDescription($card.description);
    setChangeDescription(false);
  }

  useEffect(() => {
    setDescription($card.description);
  }, [$card.description]);

  return (
    <Dialog
      open={$open}
      onClose={$onClose}
      fullWidth={true}
    >
      <Card sx={{
        width: '100%',
        maxWidth: '728px',
        backgroundColor: '#ebecf0',
        padding: '12px 24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '20px', 
          fontWeight: 600
        }}>
          {$card.name}
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            fontSize: '14px', 
            fontWeight: 300, 
            gap: '4px'
          }}>
            Dans la liste 
            <span style={{textDecoration: 'underline'}}>{$listTitle}</span>
            {$card.isFollowed && <VisibilityIcon color='action' sx={{fontSize: '16px'}} />}
          </Box>
        </Box>
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '20px'
        }}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '20px', 
            fontWeight: 600, 
            gap: '6px'
          }}>
            Description
            {changeDescription ? <Box sx={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
              <Card>
      <textarea style={{minWidth: '100%', maxWidth: '362px', minHeight: '62px', border: 'none', outline: 'none', padding: '6px 6px 0 6px', boxSizing: 'border-box'}} placeholder="Saisissez un titre pour cette carte..." value={description} onChange={(e) => setDescription(e.target.value)} />
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
          onClick={handleChangeDescription}
        >
        Enregistrer
      </Button>
      <CloseIcon sx={{cursor: 'pointer'}} color='action' onClick={handleCancel}/>
    </Box>
            </Box> 
            : description ? <Box sx={{
              fontSize: '14px', 
              fontWeight: 300, 
              cursor: 'pointer'
            }}
            onClick={() => setChangeDescription(true)}
            >
                {description}
              </Box> : <Button sx={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              gap: '6px', 
              textTransform: 'none', 
              width: '100%',
              backgroundColor: '#dbdce0',
              color: '#0000008a',
              '&:hover': {
                backgroundColor: '#d4d6da',
              },
              paddingBottom: '32px'
            }}
            onClick={() => setChangeDescription(true)}
            >
              Ajouter une description plus détaillée...
          </Button>}
          </Box>
          <Box sx={{
            minWidth: '170px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '20px', 
            fontWeight: 600, 
            gap: '6px'
          }}>
            Actions
            <Button sx={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '6px', 
              textTransform: 'none', 
              width: '100%',
              backgroundColor: '#dbdce0',
              color: '#0000008a',
              '&:hover': {
                backgroundColor: '#d4d6da',
              },
            }}
              onClick={handleFollow}
            >
              <Box sx={{              
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: '6px'
              }}>
                <VisibilityIcon sx={{fontSize: '18px'}} />
                Suivre
              </Box>
              {$card.isFollowed && <CheckBoxIcon color='success'/>}
            </Button>
            <Button sx={{
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              gap: '6px', 
              textTransform: 'none', 
              width: '100%',
              backgroundColor: '#dbdce0',
              color: '#0000008a',
              '&:hover': {
                backgroundColor: '#d4d6da',
              },
            }}
            onClick={deleteCard}
            >
              <RemoveIcon sx={{fontSize: '18px'}} />
              Supprimer
          </Button>
        </Box>
        </Box>
      </Card>
    </Dialog>
  );
}

export default CardDetail;
