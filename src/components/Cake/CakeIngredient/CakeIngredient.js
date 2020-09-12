import React from 'react';
import styles from './index.module.css'

const cakeIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('layer-bottom'):
            ingredient = <div className={styles.LayerBottom}></div>
            break;
        case ('layer-top'):
            ingredient = (
                <div className={styles.LayerTop}>
                    <div className={styles.Sparkles1}></div>
                    <div className={styles.Sparkles2}></div>
                </div>
            );
            break;
        case ('strawberry-cream'):
            ingredient = <div classname={styles.StrawberryCream}></div>
            break;
        case('orange-cream'):
            ingredient = <div className={styles.OrangeCream}></div>
            break;
        case('vanilla-cream'):
            ingredient = <div className={styles.VanillaCream}></div>
            break;
        case('chocko-cream'):
            ingredient = <div className={styles.ChockoCream}></div>
            break;
        default:
            ingredient = null;
    }
    return ingredient;


};

export default cakeIngredient;