import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__main'>
                Main
            </div>
            <div className='header__options'>
                <p className='header__options__item'>
                    Projects
                </p>
                <p className='header__options__item'>
                    Resume
                </p>
                <p className='header__options__item contact'>
                    Contact Me
                </p>
            </div>
        </div>
    )
}

export default Header
