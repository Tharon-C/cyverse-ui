import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { ClearFix } from './utils';
import { variables, styles, marg } from './styles';

const v = variables;

// TODO To be semantic this should be implemented with the Meter element. Support is strong enough for production and there are fall backs. It is a browser styled element however so it will require some style hacks to make it look good across all browsers. Since these style properties are browser specific vendor prefixing is used it is unknown to me without experimenting what autoprefixer will do to the styles or if this will require css over inline styles.

export const MeterGauge =React.createClass({

    isOver() {
        const {
            startValue,
            afterValue,
        } = this.props;
        return (
            startValue + afterValue >= 100
        );
    },

    alert() {
        const {
            alertMessage 
        } = this.props;

        return this.isOver() ? (
            <div style={ this.style().alertMessage } >
                { alertMessage }
            </div>
        ) : null;
    },

    render() {
        let {
            startValue,
            afterValue,
            muiTheme
        } = this.props;

        const style = this.style();

        return (
            <div style={ style.wrapper }>
                <dl>
                    <dt style={ style.label } >
                        {this.props.label}
                    </dt>

                    <dd style={{margin: "0px"}}>
                        <div style={ style.data }>
                            {this.props.data}
                        </div>
                        <div style={ style.bar }>
                            <div style={ style.barBefore }/>
                            <div style={ style.barAfter }/>
                        </div>
                        { this.alert() }
                    </dd>
                </dl>
            </div>
        );
    },

    style() {
        let {
            startValue,
            afterValue,
            muiTheme
        } = this.props;

        const {
            success = "green",
            danger = "red"
        } = muiTheme.palette;

        const startColor = this.isOver() ? 
            danger : success;

        // Start styles
        const wrapper = {
            ...marg(this.props),
            height: "70px"
        }

        const label = {
            fontSize: "12px",
            fontWeight: "600",
            margin: "0 0 10px",
        }
        const data = {
            ...styles.t.caption,
            color: startColor, 
            fontSize: "10px",
            margin: "0px 0px 3px",
        }
        const bar = {
            display: "flex",
            background: v.c.grey.xLight
        }
        const barBefore = {
            transition: "flex-basis ease .3s",
            height:"10px",
            float: "left",
            flexShrink: "0",
            maxWidth: "100%",
            flexBasis: startValue + "%",
            background: startColor
        }
        const barAfter = {
            transition: "flex-basis ease .3s",
            height:"10px",
            float: "left",
            flexBasis: afterValue + "%",
            background: startColor,
            opacity:".5"
        }
        const alertMessage = {
            marginTop: "5px",
            fontSize: "12px",
            color: danger,
        }

        // Combine Styles
        return {
            wrapper,
            label,
            data,
            bar,
            barBefore,
            barAfter,
            alertMessage
        }
    }
});

export default muiThemeable()(MeterGauge);
