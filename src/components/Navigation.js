import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MusicNote from 'material-ui/svg-icons/image/music-note'
import Drawer from './Drawer'


class Navigation extends PureComponent {

    // goHome() {
    //     this.props.push('/')
    // }

    render() {
        return (
            <AppBar
                title="ToeJam Enterprises"
                titleStyle={{ textAlign: 'left'}}
                iconElementRight={<IconButton onClick={this.goHome}><MusicNote /></IconButton>}
                iconStyleRight={{ marginTop: 'auto', marginBottom: 'auto'}}
                iconElementLeft={<IconButton> <Drawer/> </IconButton>}
            />
        )
    }
}

export default Navigation