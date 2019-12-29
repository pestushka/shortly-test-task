import styled from 'styled-components'
import { color, screen } from 'config/theme'

export const Wrapper = styled.div`
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: left center;
  color: ${color.white};
  text-align: center;

  ${screen.sm_min} {
    padding: 56px 0;
  }

  ${screen.sm} {
    padding: 90px 0;
  }
`

export const Text = styled.div`
  font-weight: 700;
  line-height: 1.2;

  ${screen.sm_min} {
    font-size: 40px;
    margin-bottom: 32px;
  }

  ${screen.sm} {
    font-size: 28px;
    margin-bottom: 16px;
  }
`
