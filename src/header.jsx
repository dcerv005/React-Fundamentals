import { Component } from 'react';
import './header.css';
import myImage from './batmanlogo.jpeg';

class Header extends Component {
    render (){
        return (
            <header className='imageWrapper'>
                <img className='overlayImage' src={myImage} alt="Batman Logo" />;
                <span className='overlayText'>Batman</span>
            </header>
        )
    }
}

export default Header;