import React, { Component } from 'react';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <Burger/>

        <div>Burger controls</div>

      </React.Fragment>
        
    )
  }
}


export default BurgerBuilder;