module.exports = (setCookie, cookieValue, res) => {
  if (setCookie) {
    res.cookie('stubbed_response_cookie', cookieValue)
  } else {
    res.clearCookie('stubbed_response_cookie')
  }
}
