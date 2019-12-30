import styled from 'styled-components'
import { screen } from 'config/theme'

export const Content = styled.div`
  padding: 0 24px;
  margin: 0 auto;

  ${screen.sm_min} {
    max-width: 1158px;
  }

  ${screen.sm} {
    max-width: 375px;
  }
`
