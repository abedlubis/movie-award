import styled from 'styled-components';
import { COLOR } from "../../constant";

export const ModalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.75);
    z-index: 100;
    padding: 10px 10px;

    .modal-header {
        position: relative;
        background: ${COLOR.WHITE};
        width: 680px;
        border-radius: 16px;
        display:flex;
        flex-direction: column;
        align-items: center;
        
        h2 {
            color: ${COLOR.TALES};
            margin-top: 26px;
        }

        button {
            position: absolute;
            top: 8px;
            right: 8px;
            background: transparent;
            transition: opacity .3s;

            &:hover {
                opacity: 0.5;
            }
        }

        .selected-nominees-list {
            margin: 16px 0 46px;
            width: 80%;
            
            ul {
                color: ${COLOR.DARK};
                text-align: left;
                list-style: none;

                li::before {
                    display: inline-block;
                    content: "• ";
                    font-weight: 600;
                    color: ${COLOR.TALES};
                    margin-bottom: 8px;
                    width: 1em;
                    margin-left: -1em;
                }
            }
        }
    }

    
`;
