import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import styled from 'styled-components';
import { theme, media } from './styles';
import { StudentCard } from './components'


const StyledMainContainer = styled.section`
  margin: 0px;
  padding: 5% 20%;
  width: auto;
  background-color: ${theme.colors.darkgrey};
  ${media.tablet`
        padding: 0%;
  `};
  height: 100vh;
`;


const App = () => {
    return(
        <StyledMainContainer>
            <StudentCard />
        </StyledMainContainer>
    )
};


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);