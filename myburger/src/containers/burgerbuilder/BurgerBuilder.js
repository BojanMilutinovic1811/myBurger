import React, { Component } from 'react';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
        }
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>

        <div>Burger controls</div>

      </React.Fragment>
        
    )
  }
}


export default BurgerBuilder;