/* eslint-disable no-console */
module.exports = (message) => {
  if (process.env.NODE_ENV === 'stub') {
    console.log(message)
  }
}
