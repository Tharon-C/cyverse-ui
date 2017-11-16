import React, { PropTypes } from 'react';

const SideBar = (
    {
        isOpen,
        children,
    },
) => {
    const openWidth = 250;
    const currentWidth = isOpen ? openWidth : 0; 
    const style = {
        wrapper: {
            flex: "1 0 auto",
            position: "relative",
            width: openWidth,
        },
        sideBar: {
            position: "fixed",
            top: "0px",
            bottom: "0px",
            width: currentWidth,
            marginTop: "59px",
            padding: "20px 0",
            background: "#EEEEEE",
            overflowY: "auto", 
        },
    };

    return (
        <nav id="sideBar" 
            style={ style.wrapper }
        >
            <div style={ style.sideBar } >
                { children }
            </div>
        </nav>
    );
};

SideBar.propTypes = {
    className: PropTypes.string,
};

export default SideBar;
