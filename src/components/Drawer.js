import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu'

const red = "#DEDEDE"

const menuStyle = {
    backgroundColor: red,
}

class Sidebar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    changeState = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <Menu
                    style={{
                        color: "Black",
                        height: "30px",
                        width: "30px",
                    }}
                    label="Toggle Drawer"
                    onClick={this.changeState}
                />
                <Drawer containerStyle={menuStyle} open={this.state.open} docked={false} onRequestChange={this.changeState}>
                    <div className="menu">
                        <MenuItem><p>Navigate to:</p></MenuItem>
                        <hr />
                        <MenuItem onClick={this.changeState}><a href='#Omschrijving'><p>About me</p></a></MenuItem>
                        <MenuItem onClick={this.changeState}><a href='#Opleiding'><p>Tuition</p></a></MenuItem>
                        <hr />
                        <MenuItem onClick={this.changeState}> <p> Close draw </p> </MenuItem>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Sidebar