export const arrayToMap = <T>(array: T[], key: keyof T) => {
  return array.reduce(
    (acc, item) => {
      acc[item[key] as string] = item
      return acc
    },
    {} as Record<string, T>
  )
}
