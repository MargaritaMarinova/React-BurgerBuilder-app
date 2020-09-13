import React from 'react';
import styles from './index.module.css'
import CakeIngredient from './CakeIngredient/CakeIngredient'

const cake = (props) => {
    return (
        <div className = {styles.Cake}>
            <CakeIngredient type="layer-top" />
            <CakeIngredient type="chocko-cream" />
            <CakeIngredient type="layer-middle" />
            <CakeIngredient type="strawberry-cream" />
            <CakeIngredient type="layer-bottom" />
            <CakeIngredient type="plate" />
            
            
        </div>
    );

};

export default cake;