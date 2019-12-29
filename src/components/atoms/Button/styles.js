import styled from 'styled-components'
import { color, defaultTransition } from 'config/theme'

export const Wrapper = styled.div`
  background: ${color.accent};
  border-radius: 28px;
  font-size: 20px;
  color: ${color.white};
  padding: 8px 24px;
  cursor: pointer;
  ${defaultTransition}

  &:hover {
    background: ${color.accent_hover};
  }
`
