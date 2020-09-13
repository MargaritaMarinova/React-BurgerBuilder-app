import React, {Component} from 'react';
import Aux from '../../hoc/Auxfile';
import Cake from '../../components/Cake/Cake';

class CakeBuilder extends Component {
    render() {
        return (
            <Aux>
                <Cake />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default CakeBuilder;