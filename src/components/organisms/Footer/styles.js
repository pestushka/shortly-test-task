import styled from 'styled-components'
import Section from 'components/atoms/Section'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { color, defaultTransition, screen } from 'config/theme'

export const SectionWrapper = styled(Section)`
  background: ${color.dark};
`

export const Wrapper = styled.div`
  color: ${color.white};
  display: flex;
  flex-wrap: wrap;

  ${screen.sm_min} {
    padding: 72px 0;
  }

  ${screen.sm} {
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 56px 0;
  }
`

export const Logo = styled(LogoIcon)`
  fill: ${color.white};

  ${screen.sm_min} {
    margin-right: auto;
  }

  ${screen.sm} {
    margin-bottom: 48px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${screen.md_min} {
    min-width: 190px;
  }

  ${screen.md_sm} {
    padding: 0 20px 0 60px;
  }

  ${screen.sm_min} {
    align-items: flex-start;
  }

  ${screen.sm} {
    align-items: center;
    margin-bottom: 40px;
  }
`

export const Title = styled.div`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 16px;
`

export const Link = styled.a`
  color: ${color.gray};

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  ${screen.sm_min} {
    ${defaultTransition};

    &:hover {
      color: ${color.accent};
    }
  }
`

export const Social = styled.div`
  ${screen.md_sm} {
    width: 100%;
    padding-top: 40px;
    text-align: right;
  }

  ${screen.sm} {
    padding-top: 8px;
  }
`

export const SocialLink = styled.a`
  &:not(:last-of-type) {
    margin-right: 24px;
  }

  svg {
    fill: ${color.white};

    ${screen.sm_min} {
      ${defaultTransition};

      &:hover {
        fill: ${color.accent};
      }
    }
  }
`
