/* credit goes to https://css-tricks.com/:
 * https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-rgb
 * Slight formatting changes for cypress tests, default return value is regular rgb
 */

function hex2rgb(h, forCypressTest = false) {
  let r = 0
  let g = 0
  let b = 0

  // 3 digits
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`
    g = `0x${h[2]}${h[2]}`
    b = `0x${h[3]}${h[3]}`

    // 6 digits
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`
    g = `0x${h[3]}${h[4]}`
    b = `0x${h[5]}${h[6]}`
  }
  if (forCypressTest) {
    return `rgb(${+r}, ${+g}, ${+b})`
  }
  return `rgb(${+r},${+g},${+b})`
}

export default hex2rgb
