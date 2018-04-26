import React, { PureComponent } from 'react'
import moi from '../fixtures/moi.jpg'
import '../styles/component-styles/About.css'

class About extends PureComponent {

    render() {
        return (
            <article className="about-section">
                <div className="about-text">
                    <h3> About me </h3> <br/>
                    <p> Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p> <br/> <p>
                         Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. </p> <br/> <p>
                        Excepteur sint occaecat cupidatat non proident
                        , sunt in culpa qui officia deserunt mollit anim
                        id est laborum. </p>
                </div>
                <div className="about-img">
                    <img className="guitar-img" src={moi} alt="henlo"/>
                </div>
            </article>
        )
    }
}

export default About