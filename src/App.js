import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import styled from 'styled-components';

const NavBarText = styled.p`
  font-size: 1.4rem;
  text-decoration: none;
  margin: auto 5%;
  `;
const Logo = styled.p`
  font-size: 3rem;
  margin: 0;
  width: 30%;
  `;
const Links = styled.div`
  display: flex;
  flex-direction: flex-end;
  margin-right: 2%;
  width: 10%;
  `;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  margin: 1% 0% 10% 1%;
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
