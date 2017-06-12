import React from 'react';
import P from './P';
import Title from './Title';

const Identity = (props) => {
    const {
        image,
        primaryText,
        secondaryText,
    } = props;

    let style = {
        wrapper: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
        },
        img: {
            borderRadius: "999px",
            overflow: "hidden",
            marginRight: "20px",
            minWidth: "50px",
        },
    };

    return (
        <div style={ style.wrapper }>
            <div style={ style.img }>
                { image }
            </div>
            <div>
                <div>
                    <Title
                        m={0}
                        title
                    >
                        { primaryText }
                    </Title>
                    <P
                        m={0}
                        subheading
                    >
                        { secondaryText }
                    </P>
                </div>
            </div>
        </div>
    )
};

export default Identity
