import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MusicNote from 'material-ui/svg-icons/image/music-note'
import FlatButton from 'material-ui/FlatButton'

const iconStyle = {

}


class Navigation extends PureComponent {

    goHome() {
        this.props.push('/')
    }

    render() {
        return (
            <AppBar
                title="RhW Guitar Tuition"
                iconElementRight={<IconButton onClick={this.goHome}><MusicNote /></IconButton>}
            />
        )
    }
}

export default Navigation