import React from 'react';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import { COLOR } from '../../constant';

import { Container } from './styles';

const Nominee = ({ 
  nominee, 
  selectedNominee,
  onSelectNominee,
  onUnselectNominee,
}) => {
  const isSelected = selectedNominee?.id === nominee.id;
  return (
    <Container role="tab" isSelected={isSelected}>
      <header>
        <h4>{ nominee.title }</h4>
      </header>
      <div>
        <img src={nominee.photoUrL} alt={nominee.title}/>
      </div>
      { isSelected
        ? (
          <button
            onClick={() => onUnselectNominee(nominee.id)}
          >
              <BsBookmarkStarFill size={28} color={COLOR.LIGHT_TALES} />
          </button>
        ) : (
          <button 
            onClick={() => onSelectNominee(nominee)}
          >
            <BsBookmarkStar size={28} color='#fff'/>
          </button>
        )
      }
    </Container>
  )
}

export default Nominee;
