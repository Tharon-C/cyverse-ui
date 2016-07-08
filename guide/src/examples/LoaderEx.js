import React, { PropTypes } from 'react';
import theme from '../theme';
import { Loader } from 'troposphere-ui';

const LoaderEx = React.createClass({

    render() {
        return (
            <div>
                <Loader
                    color={ theme.color.primary }
                />
            </div>
        );
    }
});

LoaderEx.propTypes = {
    className: PropTypes.string,
};

export default LoaderEx;