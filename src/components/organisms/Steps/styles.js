import styled from 'styled-components'
import Section from 'components/atoms/Section'
import { color, screen } from 'config/theme'

export const SectionWrapper = styled(Section)`
  background: ${color.gray_light};

  ${screen.sm_min} {
    padding: 120px 0;
  }

  ${screen.sm} {
    padding: 80px 0;
  }
`

export const Caption = styled.div`
  text-align: center;
  max-width: 540px;
  margin: 0 auto 100px;
`

export const Heading = styled.div`
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 18px;
  color: ${color.dark};

  ${screen.sm_min} {
    font-size: 40px;
  }

  ${screen.sm} {
    font-size: 28px;
    letter-spacing: -0.7px;
  }
`

export const Text = styled.div`
  color: ${color.gray_dark};
  letter-spacing: 0.1px;

  ${screen.sm_min} {
    font-size: 18px;
    line-height: 1.8;
  }

  ${screen.sm} {
    font-size: 16px;
    line-height: 1.6;
  }
`

export const List = styled.div`
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: ${color.accent};
    z-index: -1;

    ${screen.sm_min} {
      top: 150px;
      left: 15px;
      width: calc(100% - 30px);
      height: 8px;
    }

    ${screen.sm} {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 8px;
    }
  }
`

const itemsOffset = '44'

export const ItemWrapper = styled.div`
  padding: 0 15px;

  ${screen.sm_min} {
    width: 33.333%;

    &:nth-child(2) {
      margin-top: ${itemsOffset}px;
    }

    &:nth-child(3) {
      margin-top: ${itemsOffset * 2}px;
    }
  }

  ${screen.sm} {
    &:not(:last-of-type) {
      margin-bottom: 92px;
    }
  }
`

export const Item = styled.div`
  background: ${color.white};
  display: inline-block;
  padding: 0 32px 40px 32px;
  border-radius: 5px;

  ${screen.sm} {
    text-align: center;
  }
`

export const Icon = styled.div`
  width: ${itemsOffset * 2}px;
  height: ${itemsOffset * 2}px;
  margin-top: -${itemsOffset}px;
  margin-bottom: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.main_dark};

  svg {
    fill: ${color.accent};
  }
`

export const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 14px;
  color: ${color.dark};
`

export const Description = styled.div`
  color: ${color.gray_dark};
  line-height: 1.8;
`
