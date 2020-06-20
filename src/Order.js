import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import formSchema from './FormSchema';
import * as Yup from "yup";

const CenterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 13%;
    margin-left: 10%;
    padding: 2% 0 3% 3%;
    background: white;
    `;


const Order = props => {

    const[disabled, setDisabled] = useState(false)
    const[post, setPost] = useState([])
    const[formData, setFormData] = useState({
        size: '',
        instruct: '',
    })
    const [nameChange, setNameChange] = useState({name:''})
    const[errors, setErrors] = useState({name:''})
    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const onNameChange = event => {
        const name = event.target.name
        const value = event.target.value

            Yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
              setErrors({
                ...errors,
                [name]: ""
              });
            })
            .catch(err => {
              setErrors({
                ...errors,
                [name]: err.errors[0]
              });
            });
          setNameChange({
            ...nameChange,
            [name]: value
          });
        }
    const [checkData, setCheckData] = useState({
        red: '',
        garlic: '',
        bbq: '',
        spinach: '',
        pepperoni: '',
        canBacon: '',
        sausage: '',
        spicyItal: ''
    })
    const handleInputChange = event => {
        setCheckData({
            ...checkData,
            [event.target.name]: event.target.checked,
        })
    }
    useEffect(()=> {
        formSchema.isValid(nameChange).then(valid => {
            setDisabled(!valid);    
        })
    }, [nameChange])
    const onSubmit = event => {
        event.preventDefault();
        console.log('submitted!')
        axios.post('https://reqres.in/api/users', { formData, checkData, nameChange })
            .then(response => {
                setPost(response.data)
                console.log('success', response)
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    return (
        <CenterDiv>
            <form onSubmit={onSubmit}>
                <h2>Build your own pizza</h2>
                <label htmlFor='sizeSelect'>Choice of Size:</label><br />
                <span>Required *</span><br />
                <select id='sizeSelect' name='size' onChange={onInputChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xl'>X-Large</option>
                </select><br /><br />
                <label htmlFor='sauceSelect'>Choice of Sauce:</label><br />
                <span>Required *</span><br />
                    <input type='checkbox' id='selectSauce' name='red' onChange ={handleInputChange}></input>
                    <span>Original Red</span><br />
                    <input type='checkbox' id='selectSauce' name='garlicRanch' onChange ={handleInputChange}></input>
                    <span>Garlic Ranch</span><br />
                    <input type='checkbox' id='selectSauce' name='bbq' onChange ={handleInputChange}></input>
                    <span>BBQ Sauce</span><br />
                    <input type='checkbox' id='selectSauce' name='spinach' onChange ={handleInputChange}></input>
                    <span>Spinach Alfredo</span>
                    <br />
                    <br />
                <label htmlFor='topSelect'>Add Toppings:</label>
                <br />
                    <input type='checkbox' id='toppings' name='pepperoni' onChange ={handleInputChange}></input>
                    <span>Pepperoni</span><br />
                    <input type='checkbox' id='toppings' name='canBacon' onChange ={handleInputChange}></input>
                    <span>Canadian Bacon</span><br />
                    <input type='checkbox' id='toppings' name='sausage' onChange ={handleInputChange}></input>
                    <span>Sausage</span><br />
                    <input type='checkbox' id='toppings' name='spicyItal' onChange ={handleInputChange}></input>
                    <span>Spicy Italian Sausage</span><br />
                    <br />
                <label htmlFor='specialInstructInput'>Special Instructions:</label>
                <br />
                <input
                    name='instruct'
                    onChange={onInputChange}
                    maxLength='30'
                    placeholder='Anything else?'
                    id='specialInstruct'
                    type='text'
                />
                <br /><br />
                <label>
                    Name:<br />        
                <input name='name'
                type='text'
                onChange={onNameChange}
                placeholder='First Name, Last Name'/><br />
                </label>
                <button disabled={disabled}>Add to Order</button>
            </form>
        </CenterDiv>
    )
}

export default Order;