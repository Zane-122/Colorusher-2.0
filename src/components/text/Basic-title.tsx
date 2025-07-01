import styled from 'styled-components';
import React from 'react';

const Title = styled.h1<{color: string}>`
    font-size: 96px;
    font-weight: bold;
    font-family: 'Toastymilk', sans-serif;
    letter-spacing: 0px;
    color: ${props => props.color};
    margin-bottom: 40px;
`;

export default Title;