export const hash = (str: string) => {
  let hash = 0
  for (var i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    hash = (hash << 5) - hash + code
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}