import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardActions',
        theme => ({
            wrapper: {
                background: "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 28%,rgba(255,255,255,1) 100%)",
                display: "flex",
                position: "absolute",
                height: "48px",
                right: "5px",
                top: "8px",
            }
        }
    ))
);
/**
 * ListCardActions is used to...
 */
const ListCardActions = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <div
            { ...rest }
            className={ classes.wrapper }>
            {children}
        </div>
    )
};
ListCardActions.displayName = "ListCardActions";

ListCardActions.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCardActions
