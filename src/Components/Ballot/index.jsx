import React, { useState } from 'react';
import Nominee from '../Nominee';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useNomineeContext } from '../../context/';

import { Container } from './styles';

const Ballot = ({ category }) => {
  const [ expanded, toggleExpanded ] = useState(true);
  const [ selectedNominee, setSelectedNominee ] = useState(null);

  const { addSelectNominee, removeSelectNominee, } = useNomineeContext();

  const handleSelectNominee = (nominee) => {
    if (selectedNominee) {
      removeSelectNominee(category.id, selectedNominee.id);
    }
    setSelectedNominee(nominee);
    addSelectNominee(category.id, category.title, nominee);
  }

  const handleUnselectNominee = (nomineeId) => {
    setSelectedNominee(null);
    removeSelectNominee(category.id, nomineeId);
  }
  
  return (
    <Container role="tabpanel">
      <header className='category-header'>
        <div className='category-header-left-container'>
          <button
            onClick={() => toggleExpanded(!expanded)}
          >
            { expanded 
                ? <BsChevronUp size={18} color='#fff'/> 
                : <BsChevronDown size={18} color='#fff'/> 
            }
          </button>
          <h3>{category.title}</h3>
        </div>
        <div className='category-header-right-container'>
          { selectedNominee && <span>{`Nominated: ${selectedNominee.title}`}</span> }
        </div>
      </header>
      { expanded && (
          <main role="main">
            { category?.items?.map( nominee => {
                return (
                  <Nominee
                    key={nominee.id} 
                    nominee={nominee} 
                    selectedNominee={selectedNominee}
                    onSelectNominee={handleSelectNominee}
                    onUnselectNominee={handleUnselectNominee}
                  />
                );
              })
            }
          </main>
      )}
    </Container>
  )
}

export default Ballot;
