import React, { PureComponent } from 'react'
import '../styles/component-styles/Footer.css'

class Footer extends PureComponent {

    render() {
        return (
            <div className="footer">
                <div className="info">
                    <h3> Shameless self promotion </h3>
                    <p>  I'm also a web-developer!
                         Check out my <a href="https://github.com/robdir"> 
                         Github!</a> <br/>
                        Some of my music can be found:
                         <a href="https://soundcloud.com/inuinuband/sets/demo"> here. </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer