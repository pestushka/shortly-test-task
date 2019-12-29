import React from 'react'
import { Wrapper, LogoWrapper, Logo, MenuWrapper, Menu, Link, ButtonWrapper } from './styles'
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

const Header = () => (
  <Section>
    <Wrapper>
      <LogoWrapper href="/">
        <Logo />
      </LogoWrapper>
      <MenuWrapper>
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
    </Wrapper>
  </Section>
)

export default Header
