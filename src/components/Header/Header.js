import { Container } from '../Main/Container'
import React, { useState, useEffect } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { HeaderEl, Wrapper, Title, ModeSwitcher } from './HeaderElements'

export const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme} >
                        {theme === 'light' ? (<IoMoonOutline size='14px' />) : (<IoMoon size='14px' />)}

                        <span style={{ marginLeft: '0.6rem' }}>
                            {theme} Theme
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}