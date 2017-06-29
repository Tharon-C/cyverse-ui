import React, { PropTypes } from 'react';
import Stagger from 'react-css-stagger';
import Scroll from 'react-scroll';
import { marg } from './styles';

const scroll = Scroll.animateScroll;

const MediaCardGroup = React.createClass({
    getInitialState() {
        return {
            expanded: null
        }
    },
    
    componentDidMount: function() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount: function() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick: function(e) {
        let cards = this.refs.root;
        if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
        }
    },

    onExpand(el) {
        //TODO: This was moved from the MediaCard to the MediaCardGroup,
        // Need to iplement
        let scrollAmount = this.state.expanded ?
          -30 : 30;
        setTimeout(() => {scroll.scrollMore(scrollAmount, {
            duration: 70,
        })}, 2);
        let expanded = this.state.expanded === el ?
            null : el;
        this.setState({
            expanded
        })
    },

    render() {
        const children = React.Children.map(
            this.props.children,
            (child) => React.cloneElement(child, {
                    onExpand: this.onExpand.bind(this, child),
                    isExpanded: this.state.expanded === child,
                }
            )
        );

        return (
            <div
                style={ marg(this.props) }
                ref="root"
            >
                <Stagger
                    transition="MediaCard__animation"
                    delay={70}
                >
                    { children }
                </Stagger>
            </div>
        );
    }
});

MediaCardGroup.propTypes = {
    className: PropTypes.string,
};

export default MediaCardGroup;

