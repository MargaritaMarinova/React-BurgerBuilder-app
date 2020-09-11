import React from 'react';
import Aux from '../../hoc/Auxfile';
import styles from './index.module.css';

const Layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className = {styles.content}>
        {props.children}
    </main>
    </Aux>
)

export default Layout