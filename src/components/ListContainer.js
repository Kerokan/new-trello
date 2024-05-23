import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SingleListCard from './SingleListCard';
import { v4 as uuidv4 } from 'uuid';
import ListAdder from './ListAdder';
import CardDetail from './CardDetail';


const ListContainer = () => {
  const [lists, setLists] = useState(() => {
    // Retrieve list from local storage if exists
    const storedLists = localStorage.getItem("new-trello-lists");

    return storedLists ? JSON.parse(storedLists) : [{
      id: '41ebb126-d585-4ed2-899f-5186079d1ce8', 
      name: 'My first list'
    }];
  });
  const [listAddOpen, setListAddOpen] = useState(false);
  const [elementToDisplay, setElementToDisplay] = useState(null);
  const [elementListName, setElementListName] = useState("");
  
  // Store lists when updated
  useEffect(() => {
    localStorage.setItem("new-trello-lists", JSON.stringify(lists));
  }, [lists]);

  const handleReset = () => {
    const listsReseted = [
      {
        id: '41ebb126-d585-4ed2-899f-5186079d1ce8', 
        name: 'My first list',
        cards: [
          {
            id: 'c4a0b39b-dbf5-4d18-b59c-d4a394abe6fb',
            name: 'My first card',
            description: '',
            isFollowed: false,
          }, {
            id: '327078b9-183f-405d-ad23-5fbd94415e4d',
            name: 'My second card',
            description: '',
            isFollowed: false,
          }, {
            id: '9dd4ae90-9f0d-41b0-a6c2-0f515b009c7f',
            name: 'Followed card',
            description: '',
            isFollowed: true,
          }
        ]
      }, 
      {
        id: 'dc91f92b-e129-4110-ad2f-1e5d8ba52074', 
        name: 'My second list',
        cards: [
          {
            id: 'fb8a7f98-6190-46a3-9828-e3f31dd45f87',
            name: 'Followed card with description',
            description: 'My first description',
            isFollowed: true,
          }
        ]
      }
    ];

    setLists(listsReseted);
  }

  const handleDeleteList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  }

  const handleAddList = (title) => {
    setListAddOpen(false);
    const newLists = [...lists];
    newLists.push(
      {
        id: uuidv4(),
        name: title,
        cards: []
      }
    );
    setLists(newLists);
  }

  const handleAddCard = (index, title) => {
    const newLists = lists.map((singleList, idx) => {
      if(idx === index) {
        const newCards = [...singleList.cards];
        newCards.push({
          id: uuidv4(),
          name: title,
          isFollowed: false,
          description: ''
        })
        return {
          ...singleList, 
          cards: newCards
        };
      } else {
        return {
          ...singleList
        }
      }
    });
    setLists(newLists);
  }

  const handleEditElement = (newElement) => {
    const newLists = lists.map((singleList) => {
      return {
        ...singleList, 
        cards: singleList.cards.map((card) => {
          if(card.id === newElement.id) {
            return {...newElement};
          } else {
            return {...card}
          }
        })
      }
    });
    setElementToDisplay(newElement);
    setLists(newLists);
  };

  const handleDeleteOpenedElement = (index) => {
    const newLists = lists.map((singleList) => {
      const indexElement = singleList.cards.findIndex((card) => card.id === index);
      if(indexElement === -1) {
        return {...singleList};
      } else {
        const newCards = [...singleList.cards];
        newCards.splice(indexElement, 1);
        return {
          ...singleList,
          cards: [...newCards]
      }
      }
    });
    setElementToDisplay(null);
    setLists(newLists);
  }

  const openCard = (listIndex, cardIndex) => {
    setElementListName(lists[listIndex].name);
    setElementToDisplay(lists[listIndex].cards[cardIndex]);
  }

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',

      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '8px',
      padding: '8px',

      boxSizing: 'border-box',
    }}>
      {elementToDisplay !== null && 
        <CardDetail 
          $card={elementToDisplay} 
          $listTitle={elementListName} 
          $open={true} 
          $onClose={() => setElementToDisplay(null)} 
          $editCard={(newElement) => {handleEditElement(newElement)}} 
          $deleteCard={handleDeleteOpenedElement}
        />
      }
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: '12px'
      }}>
        <Box sx={{
          fontSize: '18px',
          fontWeight: 700,
          paddingLeft: '12px',
          height: '32px',
          display: 'flex',
          alignItems: 'center'
        }}>
          Tableau principal
        </Box>
        <Button 
          variant='contained' 
          color='success' 
          sx={{
            backgroundColor: '#5aac44',
            height: '32px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#61bd4f', 
            }
          }}
          onClick={handleReset}
        >
          Initialiser le jeu de données
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        gap: '8px',
        maxWidth: '100%'
      }}>
      {lists.map((singleList, index) => <SingleListCard 
        key={singleList.id} 
        $list={singleList} 
        $index={index} 
        $deleteList={handleDeleteList} 
        $addCard={handleAddCard} 
        $openCard={(idx) => openCard(index, idx)}
      />)}
        {listAddOpen ? < ListAdder $handleCancel={() => setListAddOpen(false)} $handleValidate={handleAddList}/> : <Box sx={{display: 'flex'}}> 
          <Button sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'flex-start', 
            gap: '6px', 
            textTransform: 'none', 
            maxWidth: '272px',
            backgroundColor: 'gray.main',
            color: 'gray.contrastText',
            '&:hover': {
              backgroundColor: '#ffffff60',
            },
          }}
          onClick={() => setListAddOpen(true)}
          >
            <AddIcon sx={{fontSize: '18px'}} />
            Ajouter une {lists.length > 0 ? 'autre liste' : 'liste'}
          </Button>
        </Box>}
      </Box>
    </Box>
  );
}

export default ListContainer;
