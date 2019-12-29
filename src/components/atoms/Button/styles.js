import styled from 'styled-components'
import { color, defaultTransition, screen } from 'config/theme'

export const Wrapper = styled.button`
  background: ${color.accent};
  border-radius: 28px;
  font-size: 20px;
  font-weight: 700;
  color: ${color.white};
  padding: 13px 24px;
  cursor: pointer;
  ${defaultTransition};
  text-align: center;
  border: none;

  ${screen.sm_min} {
    &:hover {
      background: ${color.accent_hover};
    }
  }
`
