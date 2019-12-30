import styled from 'styled-components'
import { color, screen } from 'config/theme'

export const Wrapper = styled.div`
  ${screen.sm_min} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 78px 0 68px;
  }

  ${screen.sm} {
    padding-bottom: 88px;
  }
`

export const Content = styled.div`
  ${screen.md_min} {
    max-width: 565px;
  }

  ${screen.md_sm} {
    max-width: 435px;
  }

  ${screen.sm_min} {
    flex-shrink: 0;
    margin-right: 9%;
  }

  ${screen.sm} {
    text-align: center;
  }
`

export const Heading = styled.h1`
  color: ${color.dark};
  font-weight: 700;
  line-height: 1.2;

  ${screen.md_min} {
    font-size: 80px;
  }

  ${screen.md_sm} {
    font-size: 62px;
    margin-bottom: 8px;
  }

  ${screen.sm_min} {
    letter-spacing: -2px;
  }

  ${screen.sm} {
    font-size: 42px;
    letter-spacing: -1px;
    margin-bottom: 16px;
  }
`

export const Text = styled.p`
  color: ${color.gray_dark};

  ${screen.md_min} {
    font-size: 22px;
    margin-bottom: 38px;
    letter-spacing: 0.15px;
  }

  ${screen.md} {
    font-size: 18px;
    margin-bottom: 32px;
    letter-spacing: 0.12px;
  }
`

export const ImageWrapper = styled.div`
  ${screen.sm_min} {
    position: relative;
    flex-grow: 1;
    padding-bottom: 44%;
  }
`

export const Image = styled.img`
  max-width: initial;

  ${screen.sm_min} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 165%;
  }

  ${screen.sm} {
    width: 150%;
    margin-bottom: 38px;
  }
`
