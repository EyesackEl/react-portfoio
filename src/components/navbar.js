import React from 'react';

export default function NavBar({ pageOn, handlePageChange }) {
    return (
        <nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <p class="navbar-item">The Isaac LaFlamme Experience</p>
            <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="true" data-target="navbarContent">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarContent" class="navbar-menu is-active">
            <div class="navbar-end">
                <a 
                 href="#about" 
                 onClick={() => handlePageChange('About Me')}
                 className={pageOn === 'About Me' ? 'navbar-item is-active' : 'navbar-item'}
                >
                    About Me
                </a>
                <a 
                 href="#portfolio" 
                 onClick={() => handlePageChange('Portfolio')}
                 className={pageOn === 'Portfolio' ? 'navbar-item is-active' : 'navbar-item'}
                >
                    Portfolio
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Like What You See?
                    </a>
                    <div class="navbar-dropdown">
                        <a 
                         href="#contact" 
                         onClick={() => handlePageChange('Contact')}
                         className={pageOn === 'Contact' ? 'navbar-item is-active' : 'navbar-item'}
                        >
                            Contact
                        </a>
                        <a 
                         href="#resume" 
                         onClick={() => handlePageChange('Resume')}
                         className={pageOn === 'Resume' ? 'navbar-item is-active' : 'navbar-item'}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}