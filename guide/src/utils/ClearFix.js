import React from 'react';
import { marg } from 'cyverse-ui/styles';


export default const ClearFix = props => {
    const beforeStyle = {
        display: 'table'
    };

    const afterStyle = {
        ...beforeStyle,
        clear: 'both'
    };

    return (
        <div
            style={{
                ...props.style,
                ...marg(props),
            }}
        >
            <div style={beforeStyle}/>
                {props.children}
            <div style={afterStyle}/>
        </div>
    );
};
