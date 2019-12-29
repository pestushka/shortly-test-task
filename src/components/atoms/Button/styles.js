import styled from 'styled-components'
import { color, defaultTransition, screen } from 'config/theme'

export const Wrapper = styled.div`
  background: ${color.accent};
  border-radius: 28px;
  font-size: 20px;
  font-weight: 700;
  color: ${color.white};
  padding: 8px 24px;
  cursor: pointer;
  ${defaultTransition};
  text-align: center;

  ${screen.sm_min} {
    &:hover {
      background: ${color.accent_hover};
    }
  }
`
