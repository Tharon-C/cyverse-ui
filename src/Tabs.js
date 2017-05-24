import React from 'react';
import Ink from 'react-ink';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { ClearFix, hoverable } from './utils';
import { styles, variables, marg } from './styles';

const v = variables;
const s = styles;

const Tab = hoverable((props) => {
    const {
        item,
        index,
        color,
        onMouseEnter,
        onMouseLeave,
        isHovered,
        onTabClick,
        current,
        muiTheme,
    } = props;


    // Tab styles
    const { primary1Color } = muiTheme.palette;
    const underlineBackground = color || primary1Color;
    const isActive = index === current;
    const styles = {   
        tab: {
            ...s.t.button1,
            cursor: "pointer",
            display: "inline-block",
            position: "relative",
            listStyle: "none",
            padding: "15px 0px",
            marginRight: "15px",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
            color: v.c.grey.dark,
            active: isActive ? 
                {
                    color: "black",   
                } : {},
            onHover: isHovered ? {
                color: "black",
                transition: "all 0.2s ease",
            } : {},
        },
        underline: {
            transition: "all 0.2s ease",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            left: "0px",
            margin: "auto",
            height: "3px",
            background: underlineBackground,
            width: "0%",
            active: isActive ? {
                width: "100%",
            } : {}
        }
    };

    // Tab Render
    return (
        <li 
            style={{
                ...styles.tab,
                ...styles.tab.active,
                ...styles.tab.onHover
            }}
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
            onClick={ onTabClick }
        >
                { item }
                <div 
                    style={{ 
                        ...styles.underline,
                        ...styles.underline.active
                    }}
                />
                <Ink
                    background={false}
                />
        </li>
    )
});


// Tabs component to export
const Tabs = React.createClass({
    displayName: "Tabs",

    propTypes: {
        current: React.PropTypes.number.isRequired,
        tabList: React.PropTypes.array.isRequired,
        onChangeView: React.PropTypes.func
    },

    onTabClick(e) {
        this.props.onTabClick(e);
    },

    // Tab render cb for tabList.map
    renderTab( item, i) {
        return (
            <Tab
                { ...this.props }
                key={ i }
                item={ item }
                index={ i }
                onTabClick={ this.onTabClick.bind(this, i) }
            />
        )
    },

    render() {
        const { tabList } = this.props;
        const styles = { 
            padding: 0,
            margin: 0,
        };
        return (
            <ul style={ styles }>
                {
                    tabList.map(this.renderTab)
                }
            </ul>
        )
    },
});

export default muiThemeable()(Tabs);
