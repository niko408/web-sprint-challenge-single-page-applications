import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import styled from 'styled-components';
import './App.css';

const NavBarText = styled.p`
  font-size: 1.8rem;
  text-decoration: none;
  margin: 0 5%;
  color: white;
  `;
const Logo = styled.p`
  font-size: 3rem;
  margin: 0 0 0 1%;
  width: 30%;
  color: white;
  `;
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  margin-bottom: 0.5%;
  color: white;
  `;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  background:black;
  margin-bottom:12%;
  padding: 0.5% 0;
  `;

const App = () => {
  return (
    <>
      <NavBar>
        <Logo>Lambda Eats</Logo>
        <Links>
          <NavBarText><Link to='/'>Home</Link></NavBarText>
          <NavBarText><Link to='/pizza'>Order Now</Link></NavBarText>
        </Links>
      </NavBar>
        <Route exact path='/' component={Home}></Route>
        <Route path='/pizza' component={Order}></Route>
    </>
  );
};
export default App;
