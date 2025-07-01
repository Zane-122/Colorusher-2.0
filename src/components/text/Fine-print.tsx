import styled from 'styled-components';
import React from 'react';

const FinePrint = styled.h1<{color: string}>`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Toastymilk', sans-serif;
    letter-spacing: 1px;
    color: ${props => props.color};
    margin-bottom: 0px;
`;

export default FinePrint;