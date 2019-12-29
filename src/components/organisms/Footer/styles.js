import styled from 'styled-components'
import Section from 'components/atoms/Section'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { color, defaultTransition } from 'config/theme'

export const SectionWrapper = styled(Section)`
  background: ${color.dark};
`

export const Wrapper = styled.div`
  color: ${color.white};
  display: flex;
  padding: 72px 0;
`

export const Logo = styled(LogoIcon)`
  fill: ${color.white};
  margin-right: auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 190px;
`

export const Title = styled.div`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 16px;
`

export const Link = styled.a`
  color: ${color.gray};
  ${defaultTransition};

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover {
    color: ${color.accent};
  }
`

export const Social = styled.div``

export const SocialLink = styled.a`
  &:not(:last-of-type) {
    margin-right: 24px;
  }

  svg {
    fill: ${color.white};
    ${defaultTransition};

    &:hover {
      fill: ${color.accent};
    }
  }
`
