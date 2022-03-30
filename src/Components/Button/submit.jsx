import React from 'react';

import { ButtomDiv } from './styles';

const Submit = ({ onSubmit }) => {
  

  return (
    <ButtomDiv
      onClick={onSubmit}
    >
        Submit Ballot  
    </ButtomDiv>
  )
}

export default Submit;
