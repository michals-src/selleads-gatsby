import React from 'react';

function Container({_, children, ...props}) {

    let name = (_) ? '_container' : 'container';
    
    return (
        <div className={name} {...props}>{children}</div>
    )
}

export default Container
