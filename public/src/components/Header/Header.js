import React from 'react'
import './Header.sass'

window.document.title = 'Welcome to AAMO'


class Header extends React.Component{
    
    render(){
        return <header className="aamo-header">Welcome to AAMO App!</header>
    }
}

export default Header
