import React from 'react';
import { BsX } from 'react-icons/bs';

import { ModalDiv } from './styles';

const SubmitModal = ({ selectedNominees, onClose }) => {
  return (
    <ModalDiv>
      <div className='modal-header'>
        <h2>You Have Nominated</h2>
        <button type='button' onClick={onClose}>
          <BsX size={32}/>
        </button>
        <div className="selected-nominees-list">
          <ul>
            {
              selectedNominees?.map( nominee => (
                <li>{`${nominee.categoryTitle}: ${nominee.title}`}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </ModalDiv>
  )
}

export default SubmitModal;
