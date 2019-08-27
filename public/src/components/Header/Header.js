import React from 'react'
import './Header.sass'
import MainNavigation from '../MainNavigation/MainNavigation'
import HeaderLogo from'./images/logo.png'

window.document.title = 'Welcome to AAMO'

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            headerLogo: HeaderLogo,
            headerLogoAlt: 'AAMO Header Logo'
        }
    }
    render(){
        return (
            <header className="aamo-header">
                <section className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="header-logo">
                                <img src={this.state.headerLogo} alt={this.state.headerLogoAlt}></img>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <MainNavigation />
                        </div>

                    </div>
                </section>
            </header>
        )
    }
}

export default Header
