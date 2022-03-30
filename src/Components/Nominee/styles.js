import styled, { css } from 'styled-components';
import { COLOR } from "../../constant";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-width: 300px;
  height: 500px;
  border-radius: 6px;
  margin: 8px 8px 16px;
  overflow: hidden;
  
  background-color: ${COLOR.WHITE}; 

  header {
    padding: 12px;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    background: ${COLOR.TALES};
    ${(props) => props.isSelected === true 
      ? css`
        color: ${COLOR.WHITE};
        background-color: ${COLOR.TALES};
      ` 
      : css`
        color: ${COLOR.TALES};
        background-color: ${COLOR.WHITE};
      `
    }
  
    h4 { 
      font-weight: 600;
    }
  }

  button {
    position: absolute;
    bottom: 16px;
    padding: 12px 28px;
    z-index: 10;
    color: ${COLOR.WHITE};
    background: transparent;
  }

  div {
    position: absolute;
    -webkit-filter: opacity(0.6);
    filter: opacity(0.6);
    transition: all 1.5s;

    img {
      width: 100%;
      min-width: 400px;
    }
  }

  &:hover {
    div {
      -webkit-filter: opacity(1);
      filter: opacity(1);
    }
  }

  @media screen and (max-width: 520px) {
    height: 400px; 
  }
`;