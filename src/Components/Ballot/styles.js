import styled from 'styled-components';
import { COLOR } from '../../constant';

export const Container = styled.div`
    .category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #364d60;
        padding: 8px 16px;
        margin: 36px 0 16px;
        border: 1px solid ${COLOR.WHITE};
        border-radius: 25px 25px 12px 12px;
        transition: opacity .3s;

        .category-header-left-container {  
            display: flex;
            align-items: center;
            h3 {
                text-align: left;
                margin-left: 10px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
            }
            button {
                background: transparent;
            }
            button svg:hover{
                fill: ${COLOR.LIGHT_TALES};
            }
        }

        .category-header-right-container {  
            margin-right: 16px;
            letter-spacing: 0.5px;
            font-weight: 600;
            font-size: 16px;
        } 
    }


    main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 16px;
        
        div {
            display: flex;
            flex-direction: column;
    
            h2 {
                text-align: left;
            }
        }
    }

    @media screen and (max-width: 520px) {
        main {
            padding: 0;
            
            div {
                display: flex;
                flex-direction: column;
        
                h2 {
                    text-align: left;
                }
            }
        }
    }
`;
