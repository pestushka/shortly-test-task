import styled, { css } from 'styled-components'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { color, defaultTransition, screen } from 'config/theme'
import Button from 'components/atoms/Button'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${screen.sm_min} {
    padding-top: 48px;
  }

  ${screen.sm} {
    position: relative;
    z-index: 1;
    padding: 40px 0 24px;

    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${color.white};
      position: absolute;
      z-index: -1;
    }
  }
`

export const LogoWrapper = styled.a`
  display: inline-flex;
  margin-right: 45px;

  ${screen.sm_min} {
    align-self: flex-end;
  }
`

export const Logo = styled(LogoIcon)`
  fill: ${color.dark};
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  ${screen.sm} {
    position: absolute;
    top: 100%;
    transform: translateY(-105%);
    left: 0;
    width: 100%;
    z-index: -2;
    transition: all 0.5s ease;
    background: ${color.main_dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px 40px;
    border-radius: 10px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: none;
      `}
  }
`

export const Menu = styled.div`
  ${screen.sm_min} {
    margin-right: auto;
  }

  ${screen.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &:after {
      content: ' ';
      display: block;
      height: 1px;
      width: 100%;
      background: ${color.gray_dark};
      margin-top: 32px;
      opacity: 0.25;
    }
  }
`

export const Link = styled.a`
  ${screen.sm_min} {
    color: ${color.gray_dark};
    ${defaultTransition};

    &:hover {
      color: ${color.dark};
    }

    &:not(:last-of-type) {
      margin-right: 30px;
    }
  }

  ${screen.sm} {
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    color: ${color.white};
  }
`

export const ButtonWrapper = styled(Button)`
  font-size: 15px;
  padding: 9px 24px;

  ${screen.sm_min} {
    margin-left: 38px;
  }

  ${screen.sm} {
    font-size: 18px;
    margin-top: 26px;
    width: 100%;
  }
`

export const MenuButton = styled.div`
  ${screen.sm_min} {
    display: none;
  }

  ${screen.sm} {
    width: 54px;
    padding: 15px;
    margin: -15px -15px -15px auto;
    cursor: pointer;

    div {
      background: ${color.gray_dark};
      height: 3px;
      ${defaultTransition};
      transform-origin: 100% 50%;

      &:not(:last-of-type) {
        margin-bottom: 6px;
      }

      ${({ isOpen }) =>
        isOpen &&
        css`
          &:nth-child(1) {
            transform: translate(-15%) rotate(-45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            transform: translate(-15%, -25%) rotate(45deg);
          }
        `}
    }
  }
`
