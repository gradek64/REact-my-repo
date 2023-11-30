const gifToMarkdown = (gif: string) => `![](${gif})`

const splitCamelCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
}

export const giphySearch = async (search: string) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=jIzzZ6AibBgL223cenRgJSqIb4KKjoLW&s=${encodeURI(
        splitCamelCase(search)
      )}`
    )
    const { data } = await response.json()

    // if potentially NSFW content, return default gif
    if (data.rating === 'r')
      return gifToMarkdown(
        'https://media.giphy.com/media/Ifrm2PB25hiiMFI6kN/giphy-downsized.gif'
      )

    // return a downsized gif if there is one
    if (data.images.downsized) return gifToMarkdown(data.images.downsized.url)

    // otherwise return the original gif
    return gifToMarkdown(data.url)
  } catch (e) {
    console.log(e)
    // return a default error gif
    return gifToMarkdown(
      'https://media.giphy.com/media/qjgm2rlJ6wep88aitp/giphy.gif'
    )
  }
}
