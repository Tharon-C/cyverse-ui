import React, { PropTypes } from 'react';
import theme from '../theme';
import { styles } from 'cyverse-ui/styles';
import { Title } from 'cyverse-ui';

const Figure = (
    {
        caption,
        children,
    },
) => {
    return (
        <figure style={{
                margin: "0px",
                border: "solid 1px lightgrey",
                padding: "10px",
            }}
        >
            <figcaption style={{
                    ...styles.t.title,
                    background: theme.color.primary,
                    color: "white",
                    padding: "10px",
                    margin: "-11px -11px 20px",
                }}
            >
                <Title title m={ 0 }>
                    { caption }
                </Title>
            </figcaption>
            { children }
        </figure>
    );
};

Figure.propTypes = {
    className: PropTypes.string,
};

export default Figure;
