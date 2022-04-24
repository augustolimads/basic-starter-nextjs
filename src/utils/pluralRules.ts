export const pluralRules = (
  amount: number,
  textSingular: string,
  textPlural: string
) => {
  if (amount === 1) {
    return `${amount} ${textSingular}`
  }
  return `${amount} ${textPlural}`
}
