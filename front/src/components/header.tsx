import React from 'react'
import Logo from './logo'

function Header() {
    return (
        <header className=' bg-[#313132] h-14 flex  justify-center items-center'>
            <nav className='w-4/5'>
                <Logo />
            </nav>
        </header>
    )
}

export default Header