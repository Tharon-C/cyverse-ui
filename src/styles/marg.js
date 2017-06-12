import React from 'react';
import { variables } from '../styles';

const sizes = variables.l.margSizes;

const marg = ( props ) => {

    //
    // For more information on how to use this style util
    // see cyverse-ui/src/style/README.md
    //

    const returnValue = (value, sizes) => {
        if (typeof value == "number") {
            return value === 0 ? 0 : sizes[value -1]
        } else { 
            return value
        }
    };

    return Object.keys(props).reduce((style, prop) => {
        let value = props[prop];

        let cssField;
        switch (prop) {
            case "mr":
                style.marginRight = returnValue(value, sizes);
                break;
            case "mb":
                style.marginBottom = returnValue(value, sizes);
                break;
            case "ml":
                style.marginLeft = returnValue(value, sizes);
                break;
            case "ms":
                style.marginRight = returnValue(value, sizes);
                style.marginLeft = returnValue(value, sizes);
                break;
            case "m":
                style.marginTop = returnValue(value, sizes);
                style.marginRight = returnValue(value, sizes);
                style.marginBottom = returnValue(value, sizes);
                style.marginLeft = returnValue(value, sizes);
                break;
        }

        return style

    }, {});
}

export default marg;
