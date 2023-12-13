export const nectar2faCode = (value: string) => {
  if (!value || !value.trim()) {
    return 'Please enter your verification code'
  }

  return null
}

export default nectar2faCode
