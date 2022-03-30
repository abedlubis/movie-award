import styled from 'styled-components';
import { COLOR } from '../constant';

export const ContainerDiv = styled.div`
    width: 85%;
    max-width: 1280px;
    margin: 26px auto;

    h2 {
        padding: 20px 10px;
        color: ${COLOR.LIGHT_TALES};
        font-weight: 700;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 520px) {
        width: 100%;
    }
`;
