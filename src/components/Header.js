import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dropdown = useRef();

    const handleMouseOver = (e) => {
        if (dropdown.current.contains(e.target)){
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }

    useEffect(() => {
        //document.addEventListener('mouseover', handleMouseOver);

        //return () => {
        //    document.removeEventListener('mouseover', handleMouseOver);
        //};
    },[]);


    return (
        <div className='header'>
            <Link to='/portfolio' className='header__options__item'>
                Main
            </Link>
            <div className='header__options'>
                <div ref={dropdown} className='dropdown'>
                    <p onClick={() => setOpen(!open)} className='header__options__item dropdown__link'>
                        Projects
                    </p>
                    <div className={open ? 'dropdown__options' : 'hidden'}>
                        <Link className='dropdown__options__item' to='/portfolio/projects/scientific' onClick={() => setOpen(false)} >Academic Projects</Link>
                        <Link className='dropdown__options__item' to='/portfolio/projects/web' onClick={() => setOpen(false)} >Web Projects</Link>
                    </div>
                </div>
                
                <a href='https://github.com/MRDanesh/CV/blob/master/Report.pdf' className='header__options__item'>
                    Resume
                </a>
                <Link to='/portfolio/contact' className='header__options__item'>
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default Header
