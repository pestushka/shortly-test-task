export const color = {
  dark: '#34313D',
  main_dark: '#3A3054',
  main: '#4B3F6B',
  gray_dark: '#9E9AA8',
  gray: '#BFBFBF',
  gray_light: '#EFF1F7',
  accent: '#2BD0D0',
  accent_hover: '#9AE3E3',
  white: '#FFF',
  error: '#F46363',
}

export const defaultTransition = 'transition: all 0.3s ease'

const screenSize = {
  md: 1024,
  sm: 768,
}

export const screen = {
  md: `@media (max-width: ${screenSize.md - 1}px)`,
  md_max: `@media (max-width: ${screenSize.md}px)`,
  md_min: `@media (min-width: ${screenSize.md}px)`,
  md_sm: `@media (max-width: ${screenSize.md - 1}px) and (min-width: ${screenSize.sm}px)`,
  sm: `@media (max-width: ${screenSize.sm - 1}px)`,
  sm_max: `@media (max-width: ${screenSize.sm}px)`,
  sm_min: `@media (min-width: ${screenSize.sm}px)`,
}
