import styled from 'styled-components';
import { COLOR } from "../../constant";

export const ButtomDiv = styled.button`
    position: fixed;
    bottom: 26px;
    right: 26px;
    padding: 14px 28px;
    border-radius: 45px;
    z-index: 10;
    background: ${COLOR.TALES};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${COLOR.WHITE}};
    transition: background-color .3s; 
    
    &:hover {
        background: #34AC9C;
    }

    @media screen and (max-width: 520px) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        border-radius: 0;
        padding: 8px;
        font-size: 16px;
    }
`;
