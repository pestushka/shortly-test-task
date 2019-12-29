import React from 'react'
import { SectionWrapper, Wrapper, Logo, Column, Title, Link, Social, SocialLink } from './styles'

import { ReactComponent as FacebookIcon } from 'assets/svg/social/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/svg/social/twitter.svg'
import { ReactComponent as PinterestIcon } from 'assets/svg/social/pinterest.svg'
import { ReactComponent as InstagramIcon } from 'assets/svg/social/instagram.svg'

const footerMenu = [
  {
    title: 'Features',
    list: [
      {
        name: 'Link Shortening',
        url: '/',
      },
      {
        name: 'Branded Links',
        url: '/',
      },
      {
        name: 'Analytics',
        url: '/',
      },
    ],
  },
  {
    title: 'Resources',
    list: [
      {
        name: 'Blog',
        url: '/',
      },
      {
        name: 'Developers',
        url: '/',
      },
      {
        name: 'Support',
        url: '/',
      },
    ],
  },
  {
    title: 'Company',
    list: [
      {
        name: 'About',
        url: '/',
      },
      {
        name: 'Our Team',
        url: '/',
      },
      {
        name: 'Careers',
        url: '/',
      },
      {
        name: 'Contact',
        url: '/',
      },
    ],
  },
]

const socialLinks = [
  {
    name: 'facebook',
    url: '/',
    icon: <FacebookIcon />,
  },
  {
    name: 'twitter',
    url: '',
    icon: <TwitterIcon />,
  },
  {
    name: 'pinterest',
    url: '',
    icon: <PinterestIcon />,
  },
  {
    name: 'instagram',
    url: '',
    icon: <InstagramIcon />,
  },
]

const Footer = () => (
  <SectionWrapper>
    <Wrapper>
      <Logo />
      {footerMenu.map(({ title, list }) => (
        <Column key={title}>
          <Title>{title}</Title>
          {list.map(({ name, url }) => (
            <Link href={url} key={name}>
              {name}
            </Link>
          ))}
        </Column>
      ))}
      <Social>
        {socialLinks.map(({ name, url, icon }) => (
          <SocialLink key={name} href={url} target="_blank">
            {icon}
          </SocialLink>
        ))}
      </Social>
    </Wrapper>
  </SectionWrapper>
)

export default Footer
