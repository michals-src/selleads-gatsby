import React from 'react';

const spaceClasses = ( arr, props ) => {
    return arr.map( (prefix, index) => {

        const sizes = Array(9).fill('');
        let vector = [];

        sizes.map( ( size, index ) => {
            let propName = `${prefix}${index}`;

           if(propName in props){
               vector.push(propName);
           }
        });

        return vector.join(' ');

    }).filter( item => item);
}


export default function Element(props) {
   
    const { children, className } = props;
    
    const paddingAtts = [
        'p', 'pl', 'pt', 'pr', 'pb', 'py', 'px',
        '_p', '_pl', '_pt', '_pr', '_pb', '_py', '_px',
    ];

    const marginAtts = [
        'm', 'ml', 'mt', 'mr', 'mb', 'my', 'mx',
        '_m', '_ml', '_mt', '_mr', '_mb', '_my', '_mx',
    ];
    

    let paddings = spaceClasses(paddingAtts, props);
    let margins = spaceClasses(marginAtts, props);

    let classes = [];
    classes.push(paddings.join(' '));
    classes.push(margins.join(' '));

    if( className ){
        classes.push(className);
    }

    return (
        <div {...props} className={classes.join(' ')} > {children} </div>
    )
}
