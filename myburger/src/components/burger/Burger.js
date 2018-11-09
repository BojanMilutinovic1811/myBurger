import React from 'react';
import './Burger.css';
import BurgerIngredients from './burgeringredients/BurgerIngredients'

const Burger = (props) => {
    return(
        <div className='Burger'>
            <BurgerIngredients type='bread-top'/>
            <BurgerIngredients type='cheese'/>
            <BurgerIngredients type='meat'/>
            <BurgerIngredients type='bread-bottom'/>
            
        </div>
    )
}


export default Burger; 