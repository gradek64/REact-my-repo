import { screen, fireEvent, waitFor, act } from '@testing-library/react'

/**
 * Helper method to auto click and assert values on an <AnimatedSubmitButton> or <AnimatedSubmitButtonWithRetries> component
 * @param {object.labelSubmit} string - (required) Initial text the button displays
 * @param {object.labelSubmitting} string - (optional) Submitting text state the button displays whilst submitting (leave undefined to skip this assertion)
 * @param {object.labelSubmitted} string - (optional) Submitted text state (leave undefined to skip this assertion)
 * @param {object.spinnerTestId} string - (required) `data-test` attribute for the spinner <circle> element
 * @returns {promise}
 */

export async function waitForAnimatedSubmitButton({ labelSubmit, labelSubmitting, labelSubmitted, spinnerTestId }) {
  const waitForOptions = { timeout: 5000 }
  await expect(screen.getByText(labelSubmit)).toBeInTheDocument()

  fireEvent.click(screen.getByText(labelSubmit))

  if (labelSubmitting) {
    await waitFor(() => {
      expect(screen.getByText(labelSubmitting)).toBeInTheDocument()
    }, waitForOptions)
  }

  /* Wait for the spinner to show, then manually trigger a spin iteration on
    it due to css events not firing in JSDOM */
  jest.useFakeTimers()

  await waitFor(() => {
    const spinner = screen.queryByTestId(spinnerTestId)
    if (spinner) {
      fireEvent.animationIteration(spinner)
    }
  }, waitForOptions)

  act(() => {
    jest.runAllTimers()
  })

  if (labelSubmitted) {
    await waitFor(() => {
      expect(screen.getByText(labelSubmitted)).toBeInTheDocument()
    }, waitForOptions)
  }

  jest.useRealTimers()
}
