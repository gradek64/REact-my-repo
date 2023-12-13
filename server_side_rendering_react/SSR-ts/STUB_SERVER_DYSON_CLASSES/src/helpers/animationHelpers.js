import { css, keyframes } from 'styled-components'

/**
 * Generates a delay for animating child elements in sequence
 *
 * @param {number} num the number of child elements
 * @param {number} gap the gap between each animation in milliseconds
 */
export const generateDelays = (num = 1, gap = 100) => {
  let delays = ''

  for (let index = 0; index < num; index += 1) {
    delays += `
      &:nth-child(${index + 1}) {
        animation-delay: ${400 + index * gap}ms;
      }
    `
  }

  return css`
    ${delays}
  `
}

export const disableAnimations = () => {
  return `
    animation-duration: 0ms !important;
    animation-delay: 0ms !important;
  `
}

/**
 * ANIMATIONS
 *
 * Combine slides, drifts and fades for larger animations, e.g. slide in
 * a header to draw the user's attention to the top of the page, then drift
 * in the content to pull their eyes down. Stagger the drifts using the
 * generateDelays function for maximum effect.
 */

// Use drifts when you want to subtly draw attention to something that's
// coming into view
export const driftIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  99% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 1; transform: none; }
`

export const driftOut = keyframes`
  from { opacity: 1; transform: translateY(0px); }
  to { opacity: 0; transform: translateY(-10px); }
`

// Use fades when you want something to smoothly appear but not necessarily
// draw the user's immediate attention
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

// Use a slide when you want to grab the users attention
export const slideIn = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`

export const slideOut = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(-100%); }
`
