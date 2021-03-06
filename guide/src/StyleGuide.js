import React from 'react';
import Scroll from 'react-scroll';
import {  Hr, P, Title, Div, Section } from 'cyverse-ui'; 

import { styles } from './styles';
import theme from './theme';
import 'normalize.css';
import './base.css';

import ComponentExList from './ComponentExList';
import ThemeExList from './ThemeExList';
import { Header, SideNav, Figure, ThemeExamples } from './components';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

export default React.createClass({
    renderThemeExamples() {
        return  ThemeExList.map( (component, i) => {
            return (
                <ThemeExamples
                    component={ component }
                    i={ i }
                />
            )
        })
    },

    renderComponentExamples() {
        return ComponentExList.map((Component, i) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
        return (
                <Section
                    key={ i }
                    mb={ 7 }
                >
                    <ScrollAnchor
                        name={ Name.replace(/\s+/g, '-') }
                        style={{
                            position: "absolute", 
                            top:"-50px" 
                        }}
                    />

                    <Hr mb={ 6 }/>
                    <Title 
                        h1
                        headline
                        color={ theme.color.primary }
                    > 
                        { Name } 
                    </Title>
                    <Div> 
                        { Description } 
                    </Div>
                    <Figure
                        caption={ `${Name} Example` }
                        color={ theme.color.primary }
                    >
                        <Render/>
                    </Figure>
                </Section>
            )
        });
    },

    render() {
        return (
            <Div 
                id="bodyWrapper"
                flex
            >
                <Header 
                    style={ this.style().header }
                />
                <SideNav isOpen />
                <main style={ this.style().main }>
                    <div style={ this.style().content }>
                        <Section mb={ 7 }>
                            <Title
                                h1
                                display2
                                color={ theme.color.primary }
                                mb={ 3 }
                            >
                                Cyverse UI
                            </Title>
                            <P subheading>
                                A collection of UI components for Cyverse that extend <a href="http://www.material-ui.com/" target="_blank" title="Material-UI">Material-UI</a> adding components that handle UI patterns within the Cyverse ecosystem not covered by Material-UI.
                            </P>
                        </Section>
                        <Section>
                            <Title
                                h2
                                display1
                                color={ theme.color.primary }
                            >
                                Theming
                            </Title>
                            { this.renderThemeExamples() }
			</Section>
                        <Section>
                            <Title
                                h2
                                display1
                                color={ theme.color.primary }
                            >
                                Components
                            </Title>
                            { this.renderComponentExamples() } 
                        </Section>
                    </div>
                </main>
                <footer/>
            </Div>
        )
    },

    style() {
        return {
            main: {
                background: "whitesmoke",
                width: "100%",
                marginTop: 59, 
                padding: 40,
            },

            content: {
                maxWidth: 1200,
                margin: "auto",
            }
        }
    }
})
