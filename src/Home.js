import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Order from './Order';

const CtaCont = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    background-image: url("/Assets/Pizza.jpg");
    background-position: no-repeat;
    background-size: cover;
    color: white;
    `;
const BigWord = styled.p`
    font-size: 5rem;
    text-align: center;
    width: 100%;
    `;
const Cta = styled.button`
    text-align: center;
    font-size: 2rem;
    width: 100%;
    `;


const Home = props => {
    return (
        <CtaCont>
            <BigWord>Your Favorite Food Delivered While Coding</BigWord>
            <Link to='/pizza'><Cta>Pizza?</Cta></Link>
            <Route path='/pizza' component={Order}></Route>
        </CtaCont>
    )
}

export default Home