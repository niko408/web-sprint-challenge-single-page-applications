import React from 'react';

const Order = props => {
    return (
        <div>
            <form>
                <h2>Build your own pizza</h2>
                <label htmlFor='sizeSelect'>Choice of Size:</label><br />
                <span>Required *</span><br />
                <select id='sizeSelect' name='size'>
                    <option value='1'>Small</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Large</option>
                    <option value='4'>X-Large</option>
                </select><br /><br />
                <label htmlFor='sauceSelect'>Choice of Sauce:</label><br />
                <span>Required *</span><br />
                    <input type='checkbox' id='selectSauce' name='red'></input>
                    <span>Original Red</span><br />
                    <input type='checkbox' id='selectSauce' name='garlic'></input>
                    <span>Garlic Ranch</span><br />
                    <input type='checkbox' id='selectSauce' name='bbq'></input>
                    <span>BBQ Sauce</span><br />
                    <input type='checkbox' id='selectSauce' name='spinach'></input>
                    <span>Spinach Alfredo</span>
                    <br />
                    <br />
                <label htmlFor='topSelect'>Add Toppings:</label><br />
                <span>Choose up to 10</span>
                <br />
                    <input type='checkbox' id='toppings' name='pepperoni'></input>
                    <span>Pepperoni</span><br />
                    <input type='checkbox' id='toppings' name='canBacon'></input>
                    <span>Canadian Bacon</span><br />
                    <input type='checkbox' id='toppings' name='sausage'></input>
                    <span>Sausage</span><br />
                    <input type='checkbox' id='toppings' name='spicyItal'></input>
                    <span>Spicy Italian Sausage</span><br />
                    <input type='checkbox' id='toppings' name='chicken'></input>
                    <span></span>Grilled Chicken<br />
                    <input type='checkbox' id='toppings' name='onions'></input>
                    <span>Onions</span><br />
                    <input type='checkbox' id='toppings' name='gPepper'></input>
                    <span>Green Pepper</span><br />
                    <input type='checkbox' id='toppings' name='dTom'></input>
                    <span>Diced Tomatoes</span><br />
                    <input type='checkbox' id='toppings' name='bOli'></input>
                    <span>Black Olives</span><br />
                    <input type='checkbox' id='toppings' name='rGar'></input>
                    <span>Roasted Garlic</span><br />
                    <input type='checkbox' id='toppings' name='aHeart'></input>
                    <span>Artichoke Hearts</span><br />
                    <input type='checkbox' id='toppings' name='threeChee'></input>
                    <span>Three Cheese</span><br />
                    <input type='checkbox' id='toppings' name='pine'></input>
                    <span>Pineapple</span><br />
                    <input type='checkbox' id='toppings' name='xtraChee'></input>
                    <span>Extra Cheese</span><br />
                    <br />
                <label htmlFor='specialInstructInput'>Special Instructions:</label>
                <br />
                <input
                    maxLength='30'
                    placeholder='Anything else?'
                    id='specialInstruct'
                    type='text'
                />
                






            </form>
        </div>
    )
}

export default Order