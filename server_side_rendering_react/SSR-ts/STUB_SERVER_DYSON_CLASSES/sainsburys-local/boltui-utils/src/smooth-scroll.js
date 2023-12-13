/* eslint-disable id-length */
/* eslint-disable no-plusplus, no-mixed-operators, no-param-reassign */
const easings = {
  linear(i) {
    return i
  },
  easeInQuad(i) {
    return i * i
  },
  easeOutQuad(i) {
    return i * (2 - i)
  },
  easeInOutQuad(i) {
    return i < 0.5 ? 2 * i * i : -1 + (4 - 2 * i) * i
  },
  easeInCubic(i) {
    return i * i * i
  },
  easeOutCubic(i) {
    return --i * i * i + 1
  },
  easeInOutCubic(i) {
    return i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1
  },
  easeInQuart(i) {
    return i * i * i * i
  },
  easeOutQuart(i) {
    return 1 - --i * i * i * i
  },
  easeInOutQuart(i) {
    return i < 0.5 ? 8 * i * i * i * i : 1 - 8 * --i * i * i * i
  },
  easeInQuint(i) {
    return i * i * i * i * i
  },
  easeOutQuint(i) {
    return 1 + --i * i * i * i * i
  },
  easeInOutQuint(i) {
    return i < 0.5 ? 16 * i * i * i * i * i : 1 + 16 * --i * i * i * i * i
  }
}

const getDocumentHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  )

function scrollIt(destination, padding = 0, duration = 250, easing = 'easeInOutCubic', callback = () => {}) {
  const start = window.pageYOffset
  const startTime = 'now' in window.performance ? window.performance.now() : new Date().getTime()

  const documentHeight = getDocumentHeight()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
  const destinationOffset = (typeof destination === 'number' ? destination : destination.offsetTop) - padding
  const maxPossibleOffset = Math.max(0, documentHeight - windowHeight)

  const scrollDestination = Math.max(
    0,
    Math.round(destinationOffset > maxPossibleOffset ? maxPossibleOffset : destinationOffset)
  )

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, scrollDestination)
    callback()
    return
  }

  function scroll() {
    const now = 'now' in window.performance ? window.performance.now() : new Date().getTime()
    const time = Math.min(1, (now - startTime) / duration)
    const timeFunction = easings[easing](time)

    window.scroll(0, Math.ceil(timeFunction * (scrollDestination - start) + start))

    const currentDocumentHeight = getDocumentHeight()
    const currentMaxPossibleOffset = Math.max(0, currentDocumentHeight - windowHeight)

    const offsetOutOfBounds = scrollDestination > currentMaxPossibleOffset
    const reachedOffset = Math.abs(scrollDestination - window.pageYOffset) <= 1

    if (offsetOutOfBounds || reachedOffset) {
      callback()
      return
    }

    window.requestAnimationFrame(scroll)
  }

  scroll()
}
module.exports = { scrollHere: scrollIt }
module.exports.scrollHere = scrollIt
module.exports.easings = easings
