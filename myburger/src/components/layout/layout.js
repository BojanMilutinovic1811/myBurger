import React from 'react';
import './layout.css';

const layout = (props) => (
    <React.Fragment>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className='Content'>
        {props.children}
    </main>
    </React.Fragment>
)


export default layout; 