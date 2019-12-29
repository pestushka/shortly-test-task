import React, { useState } from 'react'
import {
  Wrapper,
  LogoWrapper,
  Logo,
  MenuWrapper,
  Menu,
  Link,
  ButtonWrapper,
  MenuButton,
} from './styles'
import Section from 'components/atoms/Section'

const menuLinks = [
  {
    name: 'Features',
    url: '/',
  },
  {
    name: 'Pricing',
    url: '/',
  },
  {
    name: 'Resources',
    url: '/',
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Section>
      <Wrapper>
        <LogoWrapper href="/">
          <Logo />
        </LogoWrapper>
        <MenuWrapper isOpen={isMenuOpen}>
          <Menu>
            {menuLinks.map(({ name, url }) => (
              <Link href={url} key={name}>
                {name}
              </Link>
            ))}
          </Menu>
          <Link href="/">Login</Link>
          <ButtonWrapper>Sign Up</ButtonWrapper>
        </MenuWrapper>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </MenuButton>
      </Wrapper>
    </Section>
  )
}

export default Header
