import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Container } from './components/styles';
import MainPage from './components/mainPage/MainPage';
import HistoryPage from './components/historyPage/HistoryPage';

import './App.css';

const Nav = styled.nav`
  position: fixed;
  padding: 15px 0;
  width: 100%;
  top: 0;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(55,55,55,0.5);
    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin-right: 20px;
    }
`

export default () => {

  return (
    <>
      <Router>
        <Nav>
          <Container>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active-link">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/history" activeClassName="active-link">История</NavLink>
              </li>
            </ul>
          </Container>
        </Nav>
        <Switch>
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
