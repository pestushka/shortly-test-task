import styled from 'styled-components'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { color, defaultTransition } from 'config/theme'
import Button from 'components/atoms/Button'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 48px;
`

export const LogoWrapper = styled.a`
  display: inline-flex;
  margin-right: 45px;
  align-self: flex-end;
`

export const Logo = styled(LogoIcon)`
  fill: ${color.dark};
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const Menu = styled.div`
  margin-right: auto;
`

export const Link = styled.a`
  color: ${color.gray_dark};
  ${defaultTransition};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  &:hover {
    color: ${color.dark};
  }
`

export const ButtonWrapper = styled(Button)`
  font-size: 15px;
  padding: 9px 24px;
  margin-left: 38px;
`
