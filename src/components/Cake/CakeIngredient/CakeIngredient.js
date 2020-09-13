import React, {Component} from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

class CakeIngredient extends Component {
    render() {
        let ingredient = null;

    switch (this.props.type) {
        case ('layer-bottom'):
            ingredient = <div className={styles.LayerBottom}></div>
            break;
        case ('layer-middle'):
            ingredient = <div className={styles.LayerMiddle}></div>
            break;
        case ('plate'):
            ingredient = <div className={styles.Plate}></div>
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
            ingredient = <div className={styles.StrawberryCream}></div>
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
};

CakeIngredient.propTypes = {
    type: PropTypes.string.isRequired

}

export default CakeIngredient;