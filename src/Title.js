import React, { PropTypes } from 'react';
import { styles, marg, pad } from './styles';

const Title = React.createClass({

    render() {
        const {
            h1, h2, h3, h4, children 
        } = this.props;

        let HTag = 'h1';

        if (h1) {
            HTag = 'h1';
        }
        if (h2) {
            HTag = 'h2';
        }
        if (h3) {
            HTag = 'h3';
        }
        if (h4) {
            HTag = 'h4';
        }

        return (
            <HTag style={ this.styles() }>
                { children }
            </HTag>
        )
    },

    styles() {
        const {
            color,
            display4,
            display3,
            display2,
            display1,
            headline,
            title,
            subheading,
            body2,
        } = this.props;

        let fontStyle;
        if (display4) {
            fontStyle = styles.t.display4;
        }

        if (display3) {
            fontStyle = styles.t.display3;
        }

        if (display2) {
            fontStyle = styles.t.display2;
        }

        if (display1) {
            fontStyle = styles.t.display1;
        }

        if (headline) {
            fontStyle = styles.t.headline;
        }

        if (title) {
            fontStyle = styles.t.title;
        }

        if (subheading) {
            fontStyle = styles.t.subheading;
        }
        if (body2) {
            fontStyle = styles.t.body2;
        }

        return {
            color,
            ...fontStyle,
            ...marg({mb: 4, mt: 0}),
            ...marg( this.props ),
            ...pad( this.props ),
        }
    }
});

Title.propTypes = {
    className: PropTypes.string,
};

export default Title;
