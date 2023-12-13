import { screen } from '@testing-library/react'

const matcher = (text) => {
  return (_, node: HTMLElement) => {
    const hasText = (innerNode: HTMLElement) => innerNode.textContent === text
    const childrenDontHaveText = Array.from(node.children).every((child: HTMLElement) => !hasText(child))
    return hasText(node) && childrenDontHaveText
  }
}

export const getByTextWithMarkup = (text: string): ReturnType<(typeof screen)['getByText']> =>
  screen.getByText(matcher(text))

export const queryByTextWithMarkup = (text: string): ReturnType<(typeof screen)['queryByText']> =>
  screen.queryByText(matcher(text))
