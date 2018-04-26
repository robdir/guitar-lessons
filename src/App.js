import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/UI/theme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/About'
import background from './fixtures/git.jpg'
import './styles/component-styles/App.css';

class App extends Component {
    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired,
    }

    getChildContext() {
        return { muiTheme }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Navigation />
                    <div className="App">
                        <div className="banner-image">
                            <img src={background} className="background-guitar"/>
                                <h2 className="quote"> One-to-one guitar tuition focusing on <br /> personalised learning for all skill levels. </h2> 
                            </div>
                        <div className="about-me">
                            <About/>
                        </div>
                        </div>
                <Footer/>
            </MuiThemeProvider>
        );
    }
}

export default App;
