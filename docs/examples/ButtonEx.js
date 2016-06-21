import React from 'react';
import { Button, Code, Tooltip } from '../../src';
import { WarningIcon } from '../../src/icons';
import { ButtonGroup } from '../../src/utils';
import theme from '../theme.js';

const Example = () => {
    return (
        <div style={{marginBottom: "20px"}}>
            <ButtonGroup>
                <Button
                    children="Default"
                />
                <Button
                    tooltipMessage="I have a Tooltip!"
                    children="Primary"
                    color={ theme.color.primary }
                />
                <Button
                    children="Danger"
                    color={ theme.color.danger }
                >
                    <WarningIcon
                        size={15}
                        style={{
                            position: "relative", 
                            top: "-2px",
                        }} 
                    /> 
                        Danger
                </Button>
                <Button
                    children="Im Disabled"
                    color={ theme.color.primary }
                    disabled
                />
            </ButtonGroup>
        </div>
    )
};
        
export default React.createClass({
    render() {
        return (
            <div>
                { Example(this.onTouch) }
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <ButtonGroup>
        <Button
            children="Default"
        />
        <Button
            tooltipMessage="I have a Tooltip!"
            children="Primary"
            color={ theme.color.primary }
        />
        <Button
            children="Danger"
            color={ theme.color.danger }
        >
            <WarningIcon
                size={15}
                style={{
                    position: "relative", 
                    top: "-2px",
                }} 
            /> 
                Danger
        </Button>
        <Button
            children="Im Disabled"
            color={ theme.color.primary }
            disabled
        />
    </ButtonGroup>
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});