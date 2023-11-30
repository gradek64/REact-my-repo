export const generateBranchName = (valuesUpdated: string[]) => {
  const date = new Date()
    .toISOString()
    .replaceAll('.', '-')
    .replaceAll(':', '-')
  const branchName = `${valuesUpdated.join('-')}-${date}`
  return branchName
}
