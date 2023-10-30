import styled from 'styled-components';

export const List = styled.ul`
display: flex;
padding: 0;
margin: 0;
`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
padding: 15px;
// padding-bottom: 25px;
border: 1px solid #bbbaba87;
border-bottom: none;
width: 34%;
background-color: #e7e7e7;
`;

export const ListNumbers = styled.span`
font-weight: bold`;