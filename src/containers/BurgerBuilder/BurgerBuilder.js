import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Aux from '../../hoc/ReactAux';


class BurgerBuilder extends Component {
    /* constructor(props) {
        super(props);
        this.state = {...};
    } */

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            salad: 0,
            meat: 0
        }
    }


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Aux>
        ); 
    }
}

export default BurgerBuilder;