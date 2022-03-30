import React, { useEffect, useState } from 'react';
import Categories from '../Components/Ballot';
import SubmitButtom from '../Components/Button/submit';
import SubmitModal from '../Components/Modal/submit';
import { useNomineeContext } from '../context';
import api from '../Api/Api';

import { ContainerDiv } from './styles';

const OutterContainer = () => {
  const [ categories, setCategories ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  const { selectedNominees } = useNomineeContext();

  useEffect(() => {
      async function getBallotsFromApi() {
        const { items } = await api.getBallotData();
        setCategories(items);
      }
      getBallotsFromApi();
  }, []);

  const handleSubmit = () => {
    if (selectedNominees.length === 0) {
      return alert(`You must select at leat one Nominee to submit`);
    }

    setShowModal(true);
  }


  return (
      <ContainerDiv>
          <div>
            <h2>Movie Awards 2021</h2>
            { categories?.map( category => {
                return <Categories key={category.id} category={category}/>
              })
            }
          </div> 
          <SubmitButtom onSubmit={handleSubmit}/>
          { showModal && <SubmitModal selectedNominees={selectedNominees} onClose={() => setShowModal(false)}/> }
      </ContainerDiv>
  )
}

export default OutterContainer; 
