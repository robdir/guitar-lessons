import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/UI/theme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
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
                        </div>
                        <div className="whitespace"></div>
                        </div>
                <Footer/>
            </MuiThemeProvider>
        );
    }
}

export default App;
